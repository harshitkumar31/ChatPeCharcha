
let actualObj = [];

// console.log(formData);
const dataObj = [
  {
    data: [['how', 'what'], ['old'], ['tv']],
    reply: 'I got it 3 years back',
    priority: 1
  },
  {
    data: [[], ['touchscreen'], ['tv']],
    reply: 'Its touchscreen with built-in speakers and remote',
    priority: 1
  },
  { data: [[], ['mountable'], []], reply: 'Yes, it is mountable', priority: 1 },

  {
    data: [[], ['compatible'], []],
    reply: 'Mac and Windows compatible',
    priority: 1
  },
  {
    data: [[], ['success'], []],
    reply: 'Great! Sounds good. We have a deal!',
    priority: 1
  },
  {
    data: [[], ['fail'], []],
    reply:
      'Im not really sure about this offer. Will get back to you in a while',
    priority: 1
  },
  {
    data: [[], ['negotiate'], []],
    reply: 'This offer is way too low,not good enough.',
    priority: 1
  },
  {
    data: [[], ['low'], []],
    reply: 'This is too low.Can you go a bit higher?',
    priority: 1
  },
  {
    data: [[], ['tooLow'], []],
    reply:
      "Sorry not possible. I don't think I'm looking forward to this sort of deal",
    priority: 1
  },
  {
    data: [[], ['final'], []],
    reply: 'Will this be your final price',
    priority: 1
  },
  {
    data: [[], ['final price'], []],
    reply: 'Great! Sounds good. We have a deal!',
    priority: 1
  }
];

export const getReply = ({ subject, intentName, target, number }) => {
  let result = {};
  console.log('number here', number, intentName);
  console.log('data object', dataObj);
  if (number) {
    result.reply = processNumbers(number[0], intentName[0]);
  } else if (intentName) {
    intentName.forEach(item => {
      actualObj.forEach(obj => {
        const { data, reply, priority } = obj;
        if (data[1].indexOf(item) > -1) {
          if (!result.priority || result.priority < priority) {
            result = { reply, priority };
          }
        }
      });
    });
  } else {
    result.reply = "Sorry, I'm unable to understand you";
  }
  console.log('result reply', result.reply);
  return result.reply;
};

export const processNumbers = (number, intent) => {
  const formData = require('../../data.json');
  const { price: p, minPrice: mp } = formData;
  const price = parseInt(p, 10);
  const minPrice = parseInt(mp, 10);
  console.log('In process', number, price, minPrice, intent);
  if (number >= price) {
    return getReply({ intentName: ['success'] });
  } else if (number < price && number >= minPrice) {
    if (intent === 'final price') {
      return getReply({ intentName: ['success'] });
    }
    return getReply({ intentName: ['final'] });
  } else if (minPrice - number > minPrice / 10) {
    return getReply({ intentName: ['negotiate'] });
  }
  return getReply({ intentName: ['tooLow'] });
};

// const formData = {
//   type: 'TV',
//   size: '44 inches',
//   resolution: 'HD',
//   age: 'less than 3 months',
//   condition: 'almost like new',
//   mrp: '12000',
//   display: 'LED',
//   feature: 'Curved TV',
//   brand: 'Sony',
//   pincode: 560045,
//   emailId: 'ahgsfd@gafs.com',
//   mobile: '93847498323',
//   title: 'dshfg',
//   price: 12222,
//   minPrice: 11000
// };

const highPriorityWords = ['negotiate'];

export const fillData = values => {
  const arr = Object.keys(values).map(attr => {
    const priority = highPriorityWords.indexOf(attr) > -1 ? 10 : 1;
    return { data: [[], [attr], ['tv']], reply: values[attr], priority };
    // dataObj.push({ data: [[], [attr], ['tv']], reply: values[attr], priority });
  });
  actualObj = dataObj.concat(arr);
};

// fillData(formData);
// console.log(formData);
