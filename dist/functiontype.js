// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2); // Result: 2
calc(10, 5, (num1, num2) => num1 - num2); // Result: 5


function sayHello(name) { console.log(`Hello, ${name}!`); }
let result = sayHello("John");
export {};
//# sourceMappingURL=functiontype.js.map