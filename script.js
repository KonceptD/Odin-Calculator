// TODO: Update screen for number display
// git lol "commit msg" - used a git alias to make adding and commiting easier


// const calculator = document.querySelector('.calculator')

// grabbing the display screen assigning it to a variable
const display = document.querySelector('#input')
// assigning the buttons-container to a variable
const keysContainer = document.querySelector('.buttons-container')

// event listener for any key being clicked in the keys container
keysContainer.addEventListener('click', e => {

    // if this pressed element is a "button"
    if (e.target.matches('button')) {

        // assigning the pressed button to a variable
        const keyPressed = e.target

        // assigning the dataset of the target element to a variable
        const action = keyPressed.dataset.action

        // assigned the actual text content of the pressed key to variable
        const keyContent = keyPressed.textContent

        // assigning the actual text content of the display screen to a variable
        const displayedNum = display.textContent
    
        // if keyPressed doesn't have a dataset then it is a number
        if (!action) {

            // if the number is 0 then send it to the display screen ,else, concat the displayed number and the keyPressed one
            if (displayedNum === '0') {
                    displayedNum.textContent = keyContent
            }

            else {
                display.textContent = displayedNum + keyContent
                }
                
            }
            
            // add a class list to the mathematical signs
            if (action === 'plus' ||  action === 'minus' || action === 'multiply' || action === 'divide') {
                key.classList.add('is-depressed')
                
                    }

            // Concat a decimal to the displayed number
            if (action === 'decimal') {
                display.textContent = displayedNum + "."
                console.log('decimal')
                }
            
            // empty the value of the display screen when the AC button is hit 
            if (action === 'clear') {
                display.textContent = null;
                console.log('clear')
                }
            

            if (action === 'equals') {
                 
                }
         }   
    });

// keysCon.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target
//         const action = key.dataset.action
//         const keyContent = key.textContent
//         const displayedNum = display.textContent

//         Array.from(key.parentNode.children)
//             .forEach(i => i.classList.remove('is-depressed'))

//         if (!action) {
//             if (displayedNum === '0' || previousKeyType === 'operator') {
//                 displayedNum.textContent = keyContent
//             }
//             else {
//                 display.textContent = displayedNum + keyContent
//             }
//             console.log('number key')
//         }

//         if (
//             action === 'plus' || 
//             action === 'minus' ||
//             action === 'multiply' ||
//             action === 'divide'
//             ){
//                 key.classList.add('is-depressed')
//                 calculator.dataset.previousKeyType = 'operator'

//              }

//         if (action === 'decimal') {
//             display.textContent = displayedNum + "."
//             console.log('decimal')
//         }
//         if (action === 'clear') {
//             console.log('clear')
//         }
//         if (action === 'equals') {
//             const secondValue = displayedNum
//         }
//         }
// })



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
