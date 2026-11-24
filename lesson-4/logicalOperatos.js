

// console.log(true || true); // true // 1 + 1
// console.log(false || true || false); // true // 0 + 1
// console.log(true || false); // true // 1 + 0
// console.log(false || false); // false // 0 + 0

// console.log(true && true); // true // 1 * 1
// console.log(false && true && false); // false // 0 * 1
// console.log(true && false); // false // 1 * 0
// console.log(false && false); // false // 0 * 0

// console.log(true && false || true); // true // (1 * 0) + 1

// console.log(1 || 0); // 1 (1 є першим правдивим значенням)
// console.log(null || 1); // 1 (1 є першим правдивим значенням)
// console.log(null || 0 || 2 || 1); // 1 (перше правдиве значення)
// console.log(undefined || null || 0 || undefined); // 0 (усі хибні, повертається останнє значення)

// const blackBoxValue = '';
// const myString = blackBoxValue || "default"; // Використовуємо логічний оператор для присвоєння значення за замовчуванням
// const coalessingOperator = blackBoxValue ?? "default"; // Використовуємо оператор нульового злиття
// console.log(myString); // "Some real string"
// console.log(coalessingOperator); // "default"

// console.log(1 && 2); // 2
// console.log(null && 42); // null
// console.log(0 && "test"); // 0
// console.log(1 && 2 && null && 3); // null
// console.log(1 && 2 && 3); // 3, останнє

// !Boolean('') // true, оскільки порожній рядок є хибним значенням
console.log(!'a'); // false, оскільки непорожній рядок є правдивим значенням
console.log(!!'a'); // true, оскільки непорожній рядок є правдивим значенням