const x = 0.1;
const y = 0.2;
const sum = x + y;

console.log(sum.toFixed(1)); // Виведе: 0.30000000000000004


const number = -4.56;
const absoluteValue = Math.abs(number); // Поверне 4.56

const squaredValue = Math.pow(3, 2); // Поверне 9 (3 в квадраті)

const roundedNumber = Math.floor(5.7); // Поверне 5 (округлене до найближчого цілого)

const randomNum = Math.random(); // Поверне випадкове число між 0 та 1
const randomBetween0And1000 = Math.random() * 1000; // Поверне випадкове число між 0 та 10
console.log(Date.now()); // Поверне поточний час у мілісекундах з 1 січня 1970 року