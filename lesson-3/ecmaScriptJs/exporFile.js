export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const firstNum = 4;
export const secondNum = 2;

export const str = `The sum of ${firstNum} and ${secondNum} is ${add(firstNum, secondNum)}.`;

const defaultValue = 'This is the default export';
export default defaultValue;