// string
const doubleQuote = "This is a string with double quotes with 'quoted' string";
const singleQuote = 'This is a string with single quotes wing "quoted" string';

const withoutTemplate = 'Template uses: ' + singleQuote;
const templateLiteral = `Template uses: ${singleQuote}`;
// console.log(templateLiteral);
const guestList = `guests:
 * Mary
 * Armando
 * Enry
`;
console.log(typeof guestList);

// NUMBER
const integer = 42;
const float = 3.14;
const negative = -7;

const infinity = 1/0;
console.log(typeof infinity)

const notANumber = 3*'3a';
console.log('notANumber', notANumber);
console.log(isNaN(notANumber))

const a = 0b11111111; // двійкова форма 255
const b = 0o377; // вісімкова форма 255

console.log(a == b);

// BOOLEAN
const doesItExist = true;
const isFalse = false;

console.log(isFalse);

// UNDEFINED
let q;

console.log(typeof q); // покаже undefined

q = 'value'
console.log(q); // покаже 'value'

q = 4
console.log(q); // покаже 4

//NULL
const emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);

// Symbol
const mySymbol = Symbol();
const id1 = Symbol("id");// додаємо опис
const id2 = Symbol("id");// додаємо опис
console.log(id1 === id2); // false, навіть якщо опис однаковий
console.log('id' === 'id')
console.log(id1.description)

// operator new
const str1 = new String("Hello");
console.log(typeof str1); // поверне "object"
const num1 = new Number(42);
console.log(typeof num1); // поверне "object"