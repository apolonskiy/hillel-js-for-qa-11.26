const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const firstNum = 4;
const secondNum = 2;

const str = `The sum of ${firstNum} and ${secondNum} is ${add(firstNum, secondNum)}.`;

module.exports = { add, subtract, str, firstNum };
module.exports.secondNum = secondNum;
