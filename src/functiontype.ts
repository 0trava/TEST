// Class work 2

// Визначення типу функції, який приймає два числа та повертає число
type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log('Result:', callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);// Result: 2
calc(10, 5, (num1, num2) => num1 - num2);// Result: 5

export {};

function sayHello(name: string): void { console.log(`Hello, ${name}!`); } 
let result = sayHello("John"); // undefined