// This is making me very frustrated so I'm going to leave this aside and come back with a refreshed mind to tackle it
// 22/07/2022 - 13:26pm

// git lol "commit msg" - used a git alias to make adding and commiting easier


const display = document.querySelector('#input')



const keysCon = document.querySelector('.buttons-container')

keysCon.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        Array.from(key.paretNode.children)
            .forEach(i => i.classList.remove('is-depressed'))

        if (!action) {
            if (displayedNum === '0') {
                displayedNum.textContent = keyContent
            }
            else {
                display.textContent = displayedNum + keyContent
            }
            console.log('number key')
        }

        if (
            action === 'plus' || 
            action === 'minus' ||
            action === 'multiply' ||
            action === 'divide'
            ){
                key.classList.add('is-depressed')

             }

        if (action === 'decimal') {
            display.textContent = displayedNum + "."
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
