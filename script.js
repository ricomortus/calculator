

let operator = '';
let displayValue = '';
let num1 = 0;
let num2 = 0;

const displayText = document.querySelector('.display-text');
displayText.innerText = '0';

//displayText Function
function displayResult () {
    displayText.style.cssText = 'font-size: 45px';
    displayText.innerText = displayValue;
};
function displayResultSmall () {
    displayText.style.cssText = 'font-size: 25px';
    displayText.innerText = displayValue;
};
//operate function
function operate(operator, num1, num2) {
    //store previous number in operator functions below
    if (operator == 'add'){
        return add(num1, num2);
    } else if (operator == 'subtract') {
        return subtract(num1, num2);
    } else if (operator == 'multiply') {
        return multiply(num1, num2);
    } else if (operator == 'divide') {
        return divide(num1, num2);
    }
};
//add
function add (num1, num2) {
    num2 = Number(displayValue);
    let intResult = num1 + num2;
    let strResult = String(intResult);
    if (strResult.includes('.') && strResult.split('.')[1].length > 5) {
        return displayValue = intResult.toFixed(5);
    } else {
        return displayValue = num1 + num2;
    }
};
//subtract
function subtract (num1, num2) {
    num2 = Number(displayValue);
    let intResult = num1 - num2;
    let strResult = String(intResult);
    if (strResult.includes('.') && strResult.split('.')[1].length > 5) {
        return displayValue = intResult.toFixed(5);
    } else {
        return displayValue = num1 - num2;
    }
};

//multiply
function multiply (num1, num2) {
    num2 = Number(displayValue);
    let intResult = num1 * num2;
    let strResult = String(intResult);
    if (strResult.includes('.') && strResult.split('.')[1].length > 5) {
        return displayValue = intResult.toFixed(5);
    } else {
        return displayValue = num1 * num2;
    }
};

//divide
function divide (num1, num2) {
    num2 = Number(displayValue);
    let intResult = num1 / num2;
    let strResult = String(intResult);
    if (strResult.includes('.') && strResult.split('.')[1].length > 5) {
        return displayValue = intResult.toFixed(5);
    } else {
        return displayValue = num1 / num2;
    }
};
//FUNCTION BUTTONS
//Equal button
equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', () => {
    if (displayValue.length > 0 && String(operate(operator, num1, num2)).length > 13) {
        displayResultSmall();
    } else {
        displayResult();
    }
});
//Add Button
addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
    if (displayValue.length > 0 && String(operate(operator, num1, num2)).length > 13) {
        displayResultSmall();
    } else {
        displayResult();
    }
    num1 = Number(displayValue);
    operator = 'add';
    displayValue = ''; 
});
//Subtract Button
subtractButton = document.querySelector('.subtract-button');
subtractButton.addEventListener('click', () => {
    if (displayValue.length > 0 && String(operate(operator, num1, num2)).length > 13) {
        displayResultSmall();
    } else {
        displayResult();
    }
    num1 = Number(displayValue);
    operator = 'subtract';
    displayValue = ''; 
});
//Multiply Button
multiplyButton = document.querySelector('.multiply-button');
multiplyButton.addEventListener('click', () => {
    if (displayValue.length > 0 && String(operate(operator, num1, num2)).length > 13) {
        displayResultSmall();
    } else {
        displayResult();
    }
    num1 = Number(displayValue);
    operator = 'multiply';
    displayValue = ''; 
});
//Divide Button
divideButton = document.querySelector('.divide-button');
divideButton.addEventListener('click', () => {
    if (displayValue.length > 0 && String(operate(operator, num1, num2)).length > 13) {
        displayResultSmall();
    } else {
        displayResult();
    }
    num1 = Number(displayValue);
    operator = 'divide';
    displayValue = ''; 
});
//All Clear
allClearButton = document.querySelector('.all-clear-button');
allClearButton.addEventListener('click', () => {
    displayValue = '';
    num1 = 0;
    num2 = 0;
    operator = '';
    displayText.style.cssText = 'font-size: 45px';
    return displayText.innerText = '0';
});
//Clear button
clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    displayValue = ''
    displayText.style.cssText = 'font-size: 45px';
    return displayText.innerText = '0';
});

//NUMBER BUTTONS
//Decimal
decimalButton = document.querySelector('.decimal-button');
decimalButton.addEventListener('click', () => {
   //check if decimal exists
   if (!displayValue.includes('.') && displayValue[0] == '0') {
       displayValue += '.'
       return displayText.innerText = displayValue;
   } else if(displayValue.includes('.') && displayValue[0] == '0') {
        return displayText.innerText = displayValue;
   } else if (!displayValue.includes('.') && !displayValue[0] == '0'){
        displayValue+= '.'
        return displayText.innerText = displayValue;
   }
   return displayText.innerText = displayValue;
});
//0 
zeroButton = document.querySelector('.zero-button');
zeroButton.addEventListener('click', () => {
    if (displayValue.length < 13 && displayValue[0] !== '0') {
        displayValue += '0';
        return displayText.innerText = displayValue;
    } else if (displayValue.length < 13 && displayValue.includes('.')){
        displayValue += '0';
        return displayText.innerText = displayValue;
    }
});

//Number Button Function
function numberButton (num) {
    if (displayValue.length < 13 && operator.length == 0) {
        if (displayValue[0] == '0' && !displayValue.includes('.')) {
            displayValue = num;
            return displayText.innerText = displayValue;
        } else if (displayValue[0] == '0' && displayValue.includes('.')) {
            displayValue += num
            return displayText.innerText = displayValue;
        } else if (displayValue[0] !=='0') {
            displayValue += num;
            return displayText.innerText = displayValue;
        }
    } else if (displayValue.length < 13 && operator.length > 0) {
        displayValue += num;
        return displayText.innerText = displayValue;
    } else {
        return displayText.innerText = displayValue;
    }
};
//1
oneButton = document.querySelector('.one-button');
oneButton.addEventListener('click', () => numberButton('1'));
//2
twoButton = document.querySelector('.two-button');
twoButton.addEventListener('click', () => numberButton('2'));
//3
threeButton = document.querySelector('.three-button');
threeButton.addEventListener('click', () => numberButton('3'));
//4
fourButton = document.querySelector('.four-button');
fourButton.addEventListener('click', () => numberButton('4'));
//5
fiveButton = document.querySelector('.five-button');
fiveButton.addEventListener('click', () => numberButton('5'));
//6
sixButton = document.querySelector('.six-button');
sixButton.addEventListener('click', () => numberButton('6'));
//7
sevenButton = document.querySelector('.seven-button');
sevenButton.addEventListener('click', () => numberButton('7'));
//8
eightButton = document.querySelector('.eight-button');
eightButton.addEventListener('click', () => numberButton('8'));
//9
nineButton = document.querySelector('.nine-button');
nineButton.addEventListener('click', () => numberButton('9'));