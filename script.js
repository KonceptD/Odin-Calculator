// git lol "commit msg" - used a git alias to make adding and commiting easier

// Array of operators
let operators = ['+', '-', '*', '/']
const displayInput = document.querySelector('#input')
displayInput.textContent = ' '


// function inputScreen (expression) {
//     const screenOutput = expression; 
//     return displayInput.textContent = screenOutput;
// };

function updateDisplay (expression) {
    return displayInput.textContent = expression;
};

// attempting to have a for loop cycle through the buttons container
// to add each button to an array.
const buttonsCon = document.querySelector('buttons-container');
let btnArray = [];
for (let i = 0; i < buttonsCon.lastChild; i++) {
    btnArray.push(i);

}

// inputScreen(2 + 1); need it to display expression and not the sum - currently returning 3

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
