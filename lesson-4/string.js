
// const text = "I'm a string!";
// console.log(text[0]); // Виведе: "I"
// console.log(text[3]); // Виведе: " "
// console.log(text[text.length - 2]); // Виведе: "a"

// console.log(text.length); // Виведе: 13
// text[0]="i"; // Спроба змінити перший символ рядка (не спрацює, рядки незмінні)
// console.log(text); // Виведе: "I'm a string!"


// const extraText = text + " Extra text!";
// console.log(extraText); // Виведе: "I'm a string! Extra text!"
// const templateText = `This is a template string with the original text: ${text}`;

// const arr = ['qqqqqweqw', 'w', 'e']
// console.log(arr[0]); // Виведе: "qqqqqweqw"
// console.log(arr[1]); // Виведе: "w"
// console.log(arr[2]); // Виведе: "e"
// // console.log(typeof arr); // Виведе: "object"
// console.log(arr.length); // Виведе: 3
// arr[0] = 'new value';
// console.log(arr); // Виведе: "new value"



const text = "JavaJavaScript";
console.log(text.length); // Виведе: 14
console.log(text.toUpperCase()); // Виведе: "JAVASCRIPT"
console.log(text.charAt(3)); // Виведе: "a"
console.log(text.indexOf("ipt")); // Виведе: 7
console.log(text.substring(4, 10)); // Виведе: "Script"
console.log(text.endsWith("vaScrip")); // Виведе: false
console.log(text.slice(4, 7)); // Виведе: "Scr"
console.log(text.replace("Java", "Type")); // Виведе: "TypeScript"
console.log(text.replace(/Java/g, "Type")); // Виведе: "TypeTypeScript"
console.log(text.replaceAll("Java", "Hava")); // Виведе: "HavaHavaScript"
console.log(text.includes("ava")); // Виведе: true