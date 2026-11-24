

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Ділення на нуль недопустиме!");
    // throw "Ділення на нуль недопустиме!";
  }
  return a / b;
}

try {
  const result = divideNumbers(10, 0);
  console.log(result);  // Цей рядок не буде виконано через throw вище
} catch (thrownError) {
  console.log("Сталася помилка:", thrownError.message);
//   throw thrownError;
} finally {
   console.log("Це повідомлення виводитиметься завжди")
}

console.log(divideNumbers(10, 2));