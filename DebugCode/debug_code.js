// Add event listeners after the page loads, outside performOperation
document.getElementById('addBtn').addEventListener('click', () => performOperation('addition'));
document.getElementById('multiplyBtn').addEventListener('click', () => performOperation('multiplication'));
document.getElementById('divideBtn').addEventListener('click', () => performOperation('division'));

function performOperation(operation) {
    console.log("Operation received:", operation); // Debugging output
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;

    // Introduce a debugger statement to pause execution and inspect values
    debugger;

    // Check if inputs are valid numbers or characters
    if (!isNaN(num1) && !isNaN(num2)) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        let result;

        // Perform the requested operation
        switch (operation) {
            case 'addition':
                result = num1 + num2;
                break;
            case 'multiplication':
                result = num1 * num2;
                break;
            case 'division':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operation';
        }

        // Display the result
        displayResult(result);
    } else {
        displayResult(`Invalid input detected: ${num1}, ${num2}`);
    }
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}