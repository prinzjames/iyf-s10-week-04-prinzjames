// =====================
// VARIABLES
// =====================
let myName = "Prinz";
let myAge = 18;
let isStudent = true;
let favoriteColors = ["black", "blue", "white"];
let today = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Colors:", favoriteColors);
console.log("Date:", today);

// =====================
// OPERATORS
// =====================
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// =====================
// FUNCTIONS
// =====================
function greet(name) {
    return `Hello, ${name}!`;
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

function isEven(num) {
    return num % 2 === 0;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// =====================
// CONTROL FLOW (FizzBuzz)
// =====================
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// =====================
// CALCULATOR
// =====================
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

console.log("Calc:", calculate(10, "+", 5));

// =====================
// ARRAYS
// =====================
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);

// =====================
// OBJECTS
// =====================
const person = {
    name: "Prinz",
    age: 18,
    city: "Nairobi"
};

console.log(person.name);

// =====================
// STUDENT GRADE TRACKER
// =====================
const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return "Not found";

        const scores = Object.values(student.grades);
        const total = scores.reduce((sum, s) => sum + s, 0);
        return (total / scores.length).toFixed(2);
    },

    getTopStudent() {
        let top = null;
        let highest = 0;

        for (const student of this.students) {
            const avg = parseFloat(this.getStudentAverage(student.name));
            if (avg > highest) {
                highest = avg;
                top = student.name;
            }
        }

        return top;
    },

    getStrugglingStudents() {
        return this.students.filter(student => 
            this.getStudentAverage(student.name) < 70
        );
    }
};

// TEST DATA
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("Alice Avg:", gradeTracker.getStudentAverage("Alice"));
console.log("Top Student:", gradeTracker.getTopStudent());
console.log("Struggling:", gradeTracker.getStrugglingStudents());