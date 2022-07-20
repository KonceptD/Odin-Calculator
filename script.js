// git lol "commit msg" - used a git alias to make adding and commiting easier

// Array of operators
let operators = ['+', '-', '*', '/']

// function to operate and call relevant numerical function according to operator
function operate (num1, num2, operator) {
    switch (operator) {
        case "+":
            return addition(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

// basic functions for the calc: +, -, * and /
function addition (addOne, addTwo) {
    return addOne + addTwo;
};

function subtract (subOne, subTwo) {
    return subOne - subTwo;
};

function multiply (mulOne, mulTwo) {
    return mulOne * mulTwo;
};

function divide (divOne, divTwo) {
    return divOne / divTwo;
};
