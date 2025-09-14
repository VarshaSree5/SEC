function calculator(num1, num2, operator) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
    }

    if (operator === '-') {
        result = num1 - num2;
    }

    if (operator === '*') {
        result = num1 * num2;
    }

    if (operator === '/') {
        if (num2 === 0) {
            return "Error: Division by zero";
        }
        result = num1 / num2;
    }

    if (operator === '%') {
        result = num1 % num2;
    }

    if (
        operator !== '+' &&
        operator !== '-' &&
        operator !== '*' &&
        operator !== '/' &&
        operator !== '%'
    ) {
        return "Invalid operator";
    }

    return result;
}

console.log(calculator(10, 5, '+'));  
console.log(calculator(10, 5, '-'));  
console.log(calculator(10, 5, '*'));  
console.log(calculator(10, 5, '/'));  
console.log(calculator(10, 5, '%'));  
console.log(calculator(10, 0, '/'));  
console.log(calculator(10, 5, '^'));  
