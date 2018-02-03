/* @flow */

import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import chalk from 'chalk';
import fs from 'fs';

import createHistory from 'history/createMemoryHistory';
import configureStore from './configureStore';
import Html from './utils/Html';
import App from './containers/App';
import routes from './routes';
import { port, host } from './config';
import bodyParser from 'body-parser';
import axios from 'axios';
import CircularJSON from 'circular-json';
import { getReply, fillData } from 'MessageReplyHelpers';

const WIT_API = 'https://api.wit.ai/message';
const WIT_ACCESS_TOKEN = 'LYDPNCC5PHXNJ3MZOGMYC6HLAAPPGENX';

const app = express();

// Using helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution.
app.use(hpp());
// Compress all requests
app.use(compression());
app.use(bodyParser());

// Use morgan for http request debug (only show error)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(process.cwd(), './public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './public')));

// Run express as webpack dev server
if (__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');

  const compiler = webpack(webpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      noInfo: true,
      stats: 'minimal',
      serverSideRender: true
    })
  );

  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/api/message', (req, res) => {
  const message = req.query.message;
  const data = {
    q: message,
    access_token: WIT_ACCESS_TOKEN
  };
  axios
    .get(WIT_API, { params: data, headers: { dataType: 'jsonp' } })
    .then(resp => {
      // console.log(resp);
      const data = resp.data;
      const result = {};
      const attributes = {};
      // call the method which gives the response for given message
      Object.keys(data.entities).forEach((v, i) => {
        attributes[v] = [];
        console.log('values ', v, data.entities[v]);
        if (data.entities[v]) {
          data.entities[v].forEach((value, index) => {
            if (value.confidence > 0.6) {
              attributes[v].push(value.value);
            }
          });
        }
      });
      console.log(attributes);
      result.message = getReply(attributes);
      console.log(result.message);
      res.set('Content-Type', 'application/json');
      res.send(JSON.stringify(result)).end();
    })
    .catch(error => {
      console.log('You fked up bro!!!', error);
      res.send(error);
    });
});

app.post('/save', (req, res) => {
  fillData(req.body);
  fs.writeFile('./data.json', JSON.stringify(req.body), 'utf-8', err => {
    if (err) {
      res.status(500).json({});
      throw err;
    }
    console.log('done');
    res.status(201).json({});
  });
});

app.put('/save', (req, res) => {
  const rawdata = fs.readFileSync('./data.json');
  const adData = JSON.parse(rawdata);
  const dataToSave = {
    ...adData,
    ...req.body
  };
  fs.writeFile('./data.json', JSON.stringify(dataToSave), 'utf-8', err => {
    if (err) {
      res.status(500).json({});
      throw err;
    }
    console.log('done');
    res.status(201).json({});
  });
});

app.get('/viewAd', (req, res) => {
  try {
    const rawdata = fs.readFileSync('./data.json');
    const adData = JSON.parse(rawdata);
    res.status(200).json({ ...adData });
  } catch (err) {
    console.error(err);
    res.status(500).json({});
    // throw err;
  }
});

// Register server-side rendering middleware
app.get('*', (req, res) => {
  if (__DEV__) webpackIsomorphicTools.refresh();

  const history = createHistory();
  const store = configureStore(history);
  // eslint-disable-next-line no-shadow
  const renderHtml = (store, htmlContent = '') => {
    const html = renderToStaticMarkup(
      <Html store={store} htmlContent={htmlContent} />
    );

    return `<!doctype html>${html}`;
  };

  // If __DISABLE_SSR__ = true, disable server side rendering
  if (__DISABLE_SSR__) {
    res.send(renderHtml(store));
    return;
  }

  // Here's the method for loading data from server-side
  const loadBranchData = (): Promise<*> | Object => {
    const promises = [];

    routes.some(route => {
      const match = matchPath(req.path, route);

      if (match && route.loadData)
        // $FlowFixMe: the params of pre-load actions are dynamic
        promises.push(route.loadData(store.dispatch, match.params));

      return match;
    });

    return Promise.all(promises);
  };

  (async () => {
    try {
      // Load data from server-side first
      await loadBranchData();

      // Setup React-Router server-side rendering
      const routerContext = {};
      const htmlContent = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={routerContext}>
            <App />
          </StaticRouter>
        </Provider>
      );

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the response
      if (routerContext.url) {
        res.status(301).setHeader('Location', routerContext.url);
        res.end();

        return;
      }

      // Checking is page is 404
      const status = routerContext.status === '404' ? 404 : 200;

      // Pass the route and initial state into html template
      res.status(status).send(renderHtml(store, htmlContent));
    } catch (err) {
      res.status(404).send('Not Found :(');

      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (port) {
  app.listen(port, host, err => {
    const url = `http://${host}:${port}`;

    if (err) console.error(chalk.red(`==> 😭  OMG!!! ${err}`));

    console.info(chalk.green(`==> 🌎  Listening at ${url}`));

    // Open Chrome
    require('../tools/openBrowser')(url);
  });
} else {
  console.error(
    chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified')
  );
}
