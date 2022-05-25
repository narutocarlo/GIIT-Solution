
const axios = require("axios")
const { remove } = require("../models/Student")
const obj = {
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: [ 'running', 'coding', '-' ],
    education: { highschool: 'N/A', college: 'Yale' }
}
  

function modify(data) {
    const exclude = ['', '-', 'N/A'];
  for (const item in data) {
    if (Array.isArray(data[item])) {
      data[item] = data[item].filter((element) => !exclude.includes(element));
    } else if (typeof data[item] === 'object') {
      data[item] = modify(data[item]);
    } else if (data[item] === '' || data[item] === '-' || data[item] === 'N/A') {
      delete data[item];
    }
  }

  return data;
}






exports.getdata = async (req, res,nxt) => {
    
    const data = await axios("https://coderbyte.com/api/challenges/json/json-cleaning")
    const student = data.data
    const modifedData = modify(student)
    
    res.status(200).json({
        succsess: true,
        modifedData
    })
        
    }