// VARIABLES
let name = "Prinz";
let age = 17;
let isStudent = true;
let colors = ["red", "blue", "green"];
let today = new Date();

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Colors:", colors);
console.log("Today:", today);

// OPERATORS
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// FUNCTIONS
function greet(name) {
    return `Hello, ${name}`;
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(greet("Prinz"));
console.log(add(5, 3));
console.log(multiply(5, 3));

// CALCULATOR PROJECT
function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

// TEST CALCULATOR
console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));