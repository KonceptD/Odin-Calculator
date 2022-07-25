// * TODO: Update screen for number display - DONE
// * TODO: Add function for the equals sign to calculate 
// * TODO: Update the display screen when equals sign is pressed
// * TODO: Add functionality for '+', '-', '/', 'x' - DONE

// git lol "commit msg" - used a git alias to make adding and commiting easier


// const calculator = document.querySelector('.calculator')

// grabbing the display screen assigning it to a variable
const display = document.querySelector('#input')
// assigning the buttons-container to a variable
const keysContainer = document.querySelector('.buttons-container')

let currentOperator = "empty";; 
let num1 = [];
let num2 = [];

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

            // if the number is 0 then send it to the display screen ,else , concat the displayed number and the keyPressed one
            if (displayedNum === '0') {
                    displayedNum.textContent = keyContent
                    display.textContent = displayedNum + keyContent
                    if (currentOperator === "empty") {
                        num1.push(keyContent)
                    }
                    if (currentOperator != "empty") {
                        num2.push(keyContent)
                    }
                }

            else {
                    displayedNum.textContent = keyContent
                    display.textContent = displayedNum + keyContent
                    if (currentOperator === "empty") {
                        num1.push(keyContent)
                        console.log(num1)
                    }
                    if (currentOperator != "empty") {
                        num2.push(keyContent)
                    }
                }
                
            }
            
            // add a class list to the mathematical signs
        if (action === 'plus' ||  action === 'minus' || action === 'multiply' || action === 'divide') {
                keyPressed.classList.add('is-depressed')

                if (action === "plus") {
                    keyPressed.classList.add('is-depressed')
                    currentOperator = "+"
                    display.textContent = displayedNum + " " + "+ "
                    console.log('+') 
                  }

                else if (action === "minus") {
                    keyPressed.classList.add('is-depressed')
                    currentOperator = "-"
                    display.textContent = displayedNum + " " + "- "
                    console.log('-') 
                    }
                
                else if (action === "multiply") {
                    keyPressed.classList.add('is-depressed')
                    currentOperator = "x"
                    display.textContent = displayedNum + " " + "x "
                    console.log('x') 
                    }    
                
                else if (action === "divide") {
                    keyPressed.classList.add('is-depressed')
                    currentOperator = "/"
                    display.textContent = displayedNum + " " + "/ "
                    console.log('/') 
                    }
                
            }
                
                    

        // Concat a decimal to the displayed number
         if (action === 'decimal') {
            display.textContent = displayedNum + "."
            console.log('decimal')
             }
            
        // empty the value of the display screen when the AC button is hit 
        if (action === 'clear') {
            display.textContent = null;
            currentOperator = "empty"
            num1 = []
            num2 = []
            console.log('clear')
            }
            
            // Converts array into number, passes it into the relevant math function for calcs.
        if (action === 'equals') {
            if (currentOperator === "+") {
                let num1AsNum = Number(num1.join(""));
                let num2AsNum = Number(num2.join(""));
                console.log(num1AsNum, num2AsNum)
                display.textContent = addition(num1AsNum, num2AsNum);
                currentOperator = "empty"
                num1 = [] 
                num2 = []
            }
            else if (currentOperator === "-") {
                let num1AsNum = Number(num1.join(""));
                let num2AsNum = Number(num2.join(""));
                console.log(num1AsNum, num2AsNum)
                display.textContent = subtract(num1AsNum, num2AsNum);
                currentOperator = "empty"
                num1 = [] 
                num2 = []
                
            }
            else if (currentOperator === "x") {    
                let num1AsNum = Number(num1.join(""));
                let num2AsNum = Number(num2.join(""));
                console.log(num1AsNum, num2AsNum)
                display.textContent = multiply(num1AsNum, num2AsNum);
                currentOperator = "empty"
                num1 = [] 
                num2 = []
                
            }
            else if (currentOperator === "/") {
                let num1AsNum = Number(num1.join(""));
                let num2AsNum = Number(num2.join(""));
                console.log(num1AsNum, num2AsNum)
                display.textContent = divide(num1AsNum, num2AsNum);
                currentOperator = "empty"
                num1 = [] 
                num2 = []
                
            }

        }
    }   
});

    // function operate (num1, num2, currentOperator) {
    //     switch (operatorOperator) {
    //         case "+":
    //             return addition(num1, num2);
    //         case "-":
    //             return subtract(num1, num2);
    //         case "*":
    //             return multiply(num1, num2);
    //         case "/":
    //             return divide(num1, num2);
    //     }
    // };
    
    // basic functions for the calc: +, -, * and /
    function addition (addOne, addTwo) {
        let ans = addOne + addTwo
        return Math.round(ans);
    };
    
    function subtract (subOne, subTwo) {
        let ans = subOne - subTwo;
        return Math.round(ans);
    };
    
    function multiply (mulOne, mulTwo) {
        let ans = mulOne * mulTwo;
        return Math.round(ans);
    };
    
    function divide (divOne, divTwo) {
        if (divTwo === 0) {
            return false;
        }
        else {
        let ans = divOne / divTwo;
        return Math.round(ans); 
    }
    };
    

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
