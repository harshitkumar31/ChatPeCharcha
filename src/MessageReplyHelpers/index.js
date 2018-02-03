const dataObj = [
  { data: [['how', 'what'], ['old'], ['tv']], reply: 'I got it 3 years back', priority: 1 },
  { data: [[], ['touchscreen'], ['tv']], reply: 'Its touchscreen with built-in speakers and remote', priority: 1 },
  { data: [[], ['mountable'], []], reply: 'Yes, it is mountable', priority: 1 },
  { data: [[], ['compatible'], []], reply: 'Mac and Windows compatible', priority: 1 }
];

export const getReply = ({ subject, intentName, target }) => {
  let result = {};
  if (intentName) {
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
  price: 12222
};

const highPriorityWords = ['negotiate'];

const fillData = values => {
  Object.keys(values).forEach(attr => {
    const priority = highPriorityWords.indexOf(attr) > -1 ? 10 : 1;
    dataObj.push({ data: [[], [attr], ['tv']], reply: values[attr], priority });
  });
};

fillData(formData);
// console.log(formData);
