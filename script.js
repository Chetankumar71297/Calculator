let num1 = "";
let num2 = "";
let operator = "";
let newOperator = "";
// Functions for all of the basic math operators

function add(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2)).toFixed(1) // rounding to 1 decimal places
}

function subtract(num1, num2) {
    return (parseFloat(num1) - parseFloat(num2)).toFixed(1)
}

function multiply(num1, num2) {
    return (parseFloat(num1) * parseFloat(num2)).toFixed(1)
}

function divide(num1, num2) {
    return (parseFloat(num1) / parseFloat(num2)).toFixed(1)
}

// Function that takes an operator and 2 numbers as input and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
    let result;
    
    if (operator === "+") {
        result = add(num1, num2)
    } else if (operator === "−") {
        result = subtract(num1, num2)
    } else if (operator === "×") {
        result = multiply(num1, num2)
    } else {
        result = divide(num1, num2)
    }

    return result
}

// Function to make display work.

let previousDisplayText = ""; // Previous text will get saved in this variable each time when display function will be called!
const buttons = document.querySelectorAll("button");
const buttonsArray = [...buttons];
//const displayElement = document.querySelector(".display"); --> This will also work in combination with line no. 52! 
const displayElement = document.getElementsByClassName("display");

// Line 45-49 will call display function with innertext of button clicked
buttonsArray.forEach((item) => {
    item.addEventListener("click", () => {
    let input = item.innerText;
    display(input);
    if(["+", "−", "×", "÷", "="].includes(input)) {
        operatorProperties(input);
    } else if(input === "Clear All") {
        previousDisplayText = "";
        num1 = "";
        operator = "";
        display("");
    }
    })
});

// Line 52-59 will use innertext of button clicked to display it on screen
function display(buttonText) {
    
    if(buttonText !== "←" && buttonText !== "Clear All" && buttonText !== "=") {
        //displayElement.innerText = buttonText; --> This will also work in combination with line no. 41!
        [...displayElement][0].innerText = previousDisplayText + buttonText; // Because getElementsByClassName returns a Nodelist or HTMLCollection which should be converted to array!!
        //console.log([...displayElement][0].innerText) --> It will work but --> console.log(displayElement.innerText) --> This will not work!
        previousDisplayText = [...displayElement][0].innerText;
    }
}

function operatorProperties(operatorText) {
    if(!num1) {
        num1 = previousDisplayText.slice(0, previousDisplayText.length-1);
        operator = operatorText;
    } else {
        num2 = previousDisplayText.slice(num1.length+1);
        let result = equalTo(operator, num1, num2);
        previousDisplayText = "";
        if (operatorText !== "=") {
            newOperator = operatorText; 
            display(result + newOperator);
            num1 = "";
            operatorProperties(newOperator);
        } else {
            display(result);
            num1 = "";
        }
    }
    
    
    
}

function equalTo(operator, num1, num2) {
    if (num1 && num2 && operator) {
        return operate(operator, num1, num2);
    }
}