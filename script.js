//the calculator's screen and  buttons
const result = document.getElementById('result');
const buttons= document.querySelectorAll('.buttons button');

let currentInput = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';
let justCalculated = false

buttons.forEach(button => {
button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('number') || button.classList.contains('decimal')) {
        if (justCalculated) {
            currentInput = '';
            justCalculated = false;
        }
//if a decimal point has been previously clicked and another decimal point is clicked, this function ignores the second decimal 
        if (value === '.' && currentInput.includes('.')) return;

        //Add clicked number and display on the laptop screen 
        if (currentInput === '') {
            currentInput = value === '.' ? '0' : value;
        } else {
            currentInput += value;
        }

        result.textContent = currentInput;
    }

    //if the clicked button is an operator, store the first number and operator, and clear the current input
    else if (button.classList.contains('operator')) {
        if (currentInput === '') return;
        firstNumber = currentInput;
        operator = value;
        currentInput = '';
    }

    else if (button.classList.contains('equals')) {
        if (firstNumber === '' || currentInput === '') return;
        secondNumber = currentInput;

        const a = parseFloat(firstNumber);
        const b = parseFloat(secondNumber);
        let answer = '';

        switch (operator) {
            case '+': answer = a + b; break;
            case '-': answer = a - b; break;
            case '*': answer = a * b; break;
            case '/': answer = b !== 0 ? a / b: 'Error'; break;
            default: answer = 'Error';
        }

        result.textContent = answer;
        currentInput = answer.toString();
        firstNumber = '';
        secondNumber = '';
        operator = ''
        justCalculated = true;
        
    }

    else if (button.classList.contains('clear')) {
        currentInput = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        result.textContent = '';
        result.textContent = '0';
    }
  });
});


