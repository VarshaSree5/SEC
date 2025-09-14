// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero!';
    }
    return a / b;
}

// Example usage:
console.log("Addition: 5 + 3 =", add(5, 3));
console.log("Subtraction: 5 - 3 =", subtract(5, 3));
console.log("Multiplication: 5 * 3 =", multiply(5, 3));
console.log("Division: 5 / 3 =", divide(5, 3));
console.log("Division by zero:", divide(5, 0));
