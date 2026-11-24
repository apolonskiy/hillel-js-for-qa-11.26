let count = 0;
let randomAge = Math.floor(Math.random() * 100);
// while (count < 5 && randomAge < 50) {
//     console.log(count); // Виведе числа 0, 1, 2
//     console.log(randomAge); // Виведе випадковий вік
//     randomAge = Math.floor(Math.random() * 100);
//     count++;
// }
// console.log(randomAge)

// do... while
count = 0;
randomAge = Math.floor(Math.random() * 100);
do {
    console.log(count); // Виведе числа 0, 1, 2, 3, 4
    console.log(randomAge); // Виведе випадковий вік
    randomAge = Math.floor(Math.random() * 100);
    count++;
} while (count < 5 && randomAge < 50);
console.log(randomAge)
