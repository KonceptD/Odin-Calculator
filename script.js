// TODO: assign each button to it's numerical function and update display

// git lol "commit msg" - used a git alias to make adding and commiting easier

// Array of operators
let operators = ['+', '-', '*', '/']
const displayInput = document.querySelector('#input')
displayInput.textContent = [' ']


// function inputScreen (expression) {
//     const screenOutput = expression; 
//     return displayInput.textContent = screenOutput;
// };

function updateDisplay (expression) {
    return displayInput.textContent = expression;
};

// const btnZero = document.querySelector('#zero');
// const btnOne = document.querySelector('#one');
// const btnTwo = document.querySelector('#two');
// const btnThree = document.querySelector('#three');
// const btnFour = document.querySelector('#four');
// const btnFive = document.querySelector('#five');
// const btnSix = document.querySelector('#six');
// const btnSeven = document.querySelector('#seven');
// const btnEight = document.querySelector('#eight');
// const btnNine = document.querySelector('#nine');
// const btnClear = document.querySelector('#clear')
// const btnMultiply = document.querySelector('#multiply')
// const btnDivide = document.querySelector('#divide')
// const btnMinus = document.querySelector('#minus')
// const btnPlus = document.querySelector('#plus')
// const btnDot = document.querySelector('#dot')
// const btnEquals = document.querySelector('#equals')

const keysCon = document.querySelector('.buttons-container')

keysCon.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action

        if (!action) {
            console.log('number key')
        }

        if (
            action === 'plus' || 
            action === 'minus' ||
            action === 'multiply' ||
            action === 'divide'
            ){
                console.log('operator key')
             }
             
        if (action === 'decimal') {
            console.log('decimal')
        }
        if (action === 'clear') {
            console.log('clear')
        }
        if (action === 'equals') {
            console.log('equals')
        }
        }
})

// attempting to have a for loop cycle through the buttons container
// to add each button to an array.
// const buttonsCon = document.querySelector('buttons-container');
// let btnNumArray = [document.querySelectorAll('button-number')];
// btnNumArray.push(document.querySelectorAll('button-number'))
// let btnOperatorArray = [document.querySelectorAll('button-operator')];
// let btnFuncArray = [document.querySelectorAll('button-function')];
// let buttonKey = document.querySelector('button');

// for (let i = 0; i < document.querySelectorAll('.button').length; i++) {
//     if (i.className == document.querySelector('.button number')) {
//         btnNumArray.push(i);
//     }
//     else if (i.className == document.querySelector('.button operator')) {
//         btnOperatorArray.push(i)
//     }
//     else {
//         btnFuncArray.push(i);
//     }
// }

// for (let i = 0; i < buttonsCon.length(); i++) {
//     btnArray.push(i);

// }
// console.log(btnNumArray)
// console.log(btnOperatorArray)
// console.log(btnFuncArray)

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
