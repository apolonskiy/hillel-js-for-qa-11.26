// const age = 30;
// console.log(typeof age === 'number');

//explicit

// console.log(Boolean(3)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("test")); // true
// console.log(Boolean("")); // false


// let strNumber = "42";
// console.log(typeof strNumber); // string

// let num = Number(strNumber); // 42 стає числом 
// console.log(typeof num); // number

// console.log(parseInt('100px')); // 100
// console.log(parseFloat('10.5rem')); // 10.5
// console.log(parseInt('15.6')); // 15, тільки частина цілого числа
// console.log(parseFloat('48.5.4')); // 48.5, друга крапка зупиняє зчитування
// console.log(parseFloat("2.5test")); //2.5
// console.log( parseInt('a123') ); // NaN, перший символ зупиняє процес зчитування



// const a = -42;
// console.log( +a ); // -42

// // Перетворює нечислові значення
// console.log(+true); // 1
// console.log(+""); // 0
// console.log(+"12"); // 12

// if(a) {
//     //if true
// } else {
//     //if false
// }

console.log(200 + 5 + '10'); // "510" (рядок)
console.log('15' - 5); // 10 (число)
console.log(null + 10); // 10 (null стає 0)
console.log(true + 1); // 2 (true стає 1)
console.log(false + 1); // 1 (false стає 0)