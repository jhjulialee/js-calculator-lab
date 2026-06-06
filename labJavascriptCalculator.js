const calculationHistory = [];

function addToHistory(num1, num2, operator, result) {
    calculationHistory.push({
        operand1: num1,
        operand2: num2,
        operator: operator,
        result:result
    });
}

function add(num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, num2, "+", result);
    return result;
}

function subtract(num1,num2) {
    const result = num1 - num2;
    addToHistory(num1, num2, "-", result);
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, num2, "*", result);
    return result;
}

function divide(num1, num2) {
    if (num2 === 0) {
        const result = "Error: Cannot divide by zero";
        addToHistory(num1, num2, "/", result);
        return result;
    }

    const result = num1 / num2;
    addToHistory(num1, num2, "/", result);
    return result;    
}

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No calculations stored.");
        return;
    }

    console.log("Calculation History:");
    calculationHistory.forEach(function (calculation, index) {
        console.log(
            (index + 1) + ". " +
            calculation.operand1 + " " +
            calculation.operator + " " +
            calculation.operand2 + " = " +
            calculation.result
        );
    });
}

// Test cases
displayHistory(); // No calculations stored.

console.log(add(10, 5)); // 15
console.log(subtract(8, 3)); // 5
console.log(subtract(3, 8)); // -5
console.log(multiply(4, 6)); // 24
console.log(divide(20, 4)); // 5
console.log(divide(9, 0)); // Error: Cannot divide by zero

displayHistory();  
/* 
Calculation History:
1. 10 + 5 = 15
2. 8 - 3 = 5
3. 3 - 8 = -5
4. 4 * 6 = 24
5. 20 / 4 = 5
6. 9 / 0 = Error: Cannot divide by zero
*/
