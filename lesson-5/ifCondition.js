

const age = 19;
const isAdult = age >= 18;
const strCondition = ''
const numberCondition = 1
if (isAdult) {
    console.log("You are an adult.");
} else if(numberCondition) {
    console.log("Number Condition is met.");
} 
else if(strCondition) {
    console.log("String Condition is met.");
} 
else {
    console.log("You are not an adult.");
}


/// multy-layer if conditions example
let x = 10;
let y = 5;
let z;

// if (x > 5) {
//   console.log("x більше за 5");
//   if (y > 2) {
//     console.log("y більше за 2");
//   } else {
//     console.log("y менше або рівне 2");
//   }
// } else {
//   console.log("x менше або рівне 5");
//   if (y > 2) {
//     console.log("y більше за 2");
//   } else {
//     console.log("y менше або рівне 2");
//   }
// }

if (x > 5 && y > 2) {
    z = x + y;
    console.log("z =", z);
  console.log("x більше за 5 і y більше за 2");
} else if (x > 5 && y <= 2) {
  console.log("x більше за 5, але y не більше за 2");
} else if (x <= 5 && y > 2) {
  console.log("x не більше за 5, але y більше за 2");
} else if (x <= 5 && y <= 2) {
  console.log("x не більше за 5 і y не більше за 2");
} else {
  console.log("x не більше за 5 або y не більше за 2");
}

console.log("z =", z);


/// ternary operator 
// DO NOT DO MULTI-LAYER TERNARY OPERATORS
// const accessAllowed = numberCondition ? 'allow' : strCondition ? 'allow' : 'don\'t allow';
const accessAllowed = age > 18 ? 'allow' : "don't allow";
console.log("Access:", accessAllowed);