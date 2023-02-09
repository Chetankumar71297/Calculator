// Functions for all of the basic math operators

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

// Function that takes an operator and 2 numbers as input and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
    let result;
    
    if (operator === "+") {
        result = add(num1, num2)
    } else if (operator === "-") {
        result = subtract(num1, num2)
    } else if (operator === "*") {
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
    display(input);})
});

// Line 52-59 will use innertext of button clicked to display it on screen
function display(buttonText) {
    console.log(buttonText)
    if(buttonText !== "←" && buttonText !== "Clear All" && buttonText !== "=") {
        //displayElement.innerText = buttonText; --> This will also work in combination with line no. 41!
        [...displayElement][0].innerText = previousDisplayText + buttonText; // Because getElementsByClassName returns a Nodelist or HTMLCollection which should be converted to array!!
        //console.log([...displayElement][0].innerText) --> It will work but --> console.log(displayElement.innerText) --> This will not work!
        previousDisplayText = [...displayElement][0].innerText;
    }
}
