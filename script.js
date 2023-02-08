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