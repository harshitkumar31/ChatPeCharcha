const dataObj = [
  { data: [['how', 'what'], ['old'], ['tv']], reply: 'I got it 3 years back', priority: 1 },
  { data: [[], ['touchscreen'], ['tv']], reply: 'Its touchscreen with built-in speakers and remote', priority: 1 },
  { data: [[], ['mountable'], []], reply: 'Yes, it is mountable', priority: 1 },
  { data: [[], ['compatible'], []], reply: 'Mac and Windows compatible', priority: 1 },
  { data: [[], ['success'], []], reply: 'Great! Sounds good. Will get back to you in a while.', priority: 1 },
  { data: [[], ['fail'], []], reply: 'Im not really sure about this offer. Will get back to you in a while' , priority: 1 },
  { data: [[], ['negotiate'], []], reply: 'Similar products have been rated at a higher price than mine. Im sure the deal I offered is good enough', priority: 1 },
  { data: [[], ['low'], []], reply: 'This is too low.Can you go a bit higher?' , priority: 1 },
  { data: [[], ['tooLow'], []], reply: 'Sorry not possible. I don\'t think I\'m looking forward to this sort of deal' , priority: 1 },
  { data: [[], ['final'], []], reply: 'Will this be your final price' , priority: 1 },

];

export const processNumbers = number => {
  const { price, minPrice } = formData;
  if (number >= price) {
    return getReply({ intentName: ['success']});
  } else if (number < price && number >= minPrice) {
    return getReply({ intentName: ['final']});
  }  else if ((minPrice - number) > (minPrice/10)) {
    return getReply({ intentName: ['negotiate']});
  } else {
    return getReply({ intentName: ['tooLow']});
  }
};

export const getReply = ({ subject, intentName, target, number }) => {
  let result = {};
  if (number) {
    result.reply = processNumbers(number);
  } else if (intentName) {
    intentName.forEach(item => {
      dataObj.forEach(obj => {
        const { data, reply, priority } = obj;
        if (data[1].indexOf(item) > -1) {
          if (!result.priority || result.priority < priority) {
            result = { reply, priority };
          }
        }
      });
    });
  } else {
    result.reply = 'Sorry, I\'m unable to understand you';
  }
  return result.reply;
};

const formData = {
  type: 'TV',
  size: '44 inches',
  resolution: 'HD',
  age: 'less than 3 months',
  condition: 'almost like new',
  mrp: '12000',
  display: 'LED',
  feature: 'Curved TV',
  brand: 'Sony',
  pincode: 560045,
  emailId: 'ahgsfd@gafs.com',
  mobile: '93847498323',
  title: 'dshfg',
  price: 12222,
  minPrice: 11000
};

const highPriorityWords = ['negotiate'];

export const fillData = values => {
  Object.keys(values).forEach(attr => {
    const priority = highPriorityWords.indexOf(attr) > -1 ? 10 : 1;
    dataObj.push({ data: [[], [attr], ['tv']], reply: values[attr], priority });
  });
};


// fillData(formData);
// console.log(formData);
