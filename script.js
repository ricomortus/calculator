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
//Determine result font size based on number of digits

//GO THROUGH STEP BY STEP OF THE CONDITIONS
function displayFinalResult () {
    if (displayValue.length > 0 && String(operate(operator, num1, num2)).length > 13) {
        displayResultSmall();
    } else if (displayValue.length > 0 && String(operate(operator, num1, num2)).length < 13) {
        displayResult();
    //Need to find a way to differentiate between empty string and 0
    } else if (String(displayValue.length) == 0) {
        displayText.innerText = '0'
    } else {
        displayResult();
    }
};
//Equal button
equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('mousedown', () => {
    equalButton.style.cssText = 'background-color: #FFEBFE'
});
equalButton.addEventListener('mouseup', () => {
    equalButton.style.cssText = 'background-color: #ffd7fe'
    displayFinalResult();
});
//Add Button
addButton = document.querySelector('.add-button');
addButton.addEventListener('mousedown', () => {
    addButton.style.cssText = 'background-color: #FFBAEE'
});
addButton.addEventListener('mouseup', () => {
    addButton.style.cssText = 'background-color: #ffa7e9'
    displayFinalResult();
    num1 = Number(displayValue);
    operator = 'add';
    displayValue = ''; 
});
//Subtract Button
subtractButton = document.querySelector('.subtract-button');
subtractButton.addEventListener('mousedown', () => {
    subtractButton.style.cssText = 'background-color: #FFBAEE'
});
subtractButton.addEventListener('mouseup', () => {
    subtractButton.style.cssText = 'background-color: #ffa7e9'
    displayFinalResult();
    num1 = Number(displayValue);
    operator = 'subtract';
    displayValue = ''; 
});
//Multiply Button
multiplyButton = document.querySelector('.multiply-button');
multiplyButton.addEventListener('mousedown', () => {
    multiplyButton.style.cssText = 'background-color: #FFBAEE'
});
multiplyButton.addEventListener('mouseup', () => {
    multiplyButton.style.cssText = 'background-color: #ffa7e9'
    displayFinalResult();
    num1 = Number(displayValue);
    operator = 'multiply';
    displayValue = ''; 
});
//Divide Button
divideButton = document.querySelector('.divide-button');
divideButton.addEventListener('mousedown', () => {
    divideButton.style.cssText = 'background-color: #FFBAEE'
});
divideButton.addEventListener('mouseup', () => {
    divideButton.style.cssText = 'background-color: #ffa7e9'
    displayFinalResult();
    num1 = Number(displayValue);
    operator = 'divide';
    displayValue = ''; 
});
//All Clear
allClearButton = document.querySelector('.all-clear-button');
allClearButton.addEventListener('mousedown', () => {
    allClearButton.style.cssText = 'background-color: #FFEBFE'
});
allClearButton.addEventListener('mouseup', () => {
    allClearButton.style.cssText = 'background-color: #ffd7fe'
    displayValue = '';
    num1 = 0;
    num2 = 0;
    operator = '';
    displayText.style.cssText = 'font-size: 45px';
    return displayText.innerText = '0';
});
//Clear button
clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('mousedown', () => {
    clearButton.style.cssText = 'background-color: #FFEBFE'
});
clearButton.addEventListener('mouseup', () => {
    clearButton.style.cssText = 'background-color: #ffd7fe'
    displayValue = ''
    displayText.style.cssText = 'font-size: 45px';
    return displayText.innerText = '0';
});

//NUMBER BUTTONS
//Decimal
decimalButton = document.querySelector('.decimal-button');
decimalButton.addEventListener('mousedown', () => decimalButton.style.cssText = 'background-color: #E3E3FF');

decimalButton.addEventListener('mouseup', () => {
    decimalButton.style.cssText = 'background-color: #D2DAFF';
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
});
//0 
zeroButton = document.querySelector('.zero-button');
zeroButton.addEventListener('mousedown', () => zeroButton.style.cssText = 'background-color: #E3E3FF');

zeroButton.addEventListener('mouseup', () => {
    zeroButton.style.cssText = 'background-color: #D2DAFF';
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
oneButton.addEventListener('mousedown', () => oneButton.style.cssText = 'background-color: #E3E3FF');
oneButton.addEventListener('mouseup', () => {
    oneButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('1')
});
//2
twoButton = document.querySelector('.two-button');
twoButton.addEventListener('mousedown', () => twoButton.style.cssText = 'background-color: #E3E3FF');
twoButton.addEventListener('mouseup', () => {
    twoButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('2')
});
//3
threeButton = document.querySelector('.three-button');
threeButton.addEventListener('mousedown', () => threeButton.style.cssText = 'background-color: #E3E3FF');
threeButton.addEventListener('mouseup', () => {
    threeButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('3')
});
//4
fourButton = document.querySelector('.four-button');
fourButton.addEventListener('mousedown', () => fourButton.style.cssText = 'background-color: #E3E3FF');
fourButton.addEventListener('mouseup', () => {
    fourButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('4')
});
//5
fiveButton = document.querySelector('.five-button');
fiveButton.addEventListener('mousedown', () => fiveButton.style.cssText = 'background-color: #E3E3FF');
fiveButton.addEventListener('mouseup', () => {
    fiveButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('5')
});
//6
sixButton = document.querySelector('.six-button');
sixButton.addEventListener('mousedown', () => sixButton.style.cssText = 'background-color: #E3E3FF');
sixButton.addEventListener('mouseup', () => {
    sixButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('6')
});
//7
sevenButton = document.querySelector('.seven-button');
sevenButton.addEventListener('mousedown', () => sevenButton.style.cssText = 'background-color: #E3E3FF');
sevenButton.addEventListener('mouseup', () => {
    sevenButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('7')
});
//8
eightButton = document.querySelector('.eight-button');
eightButton.addEventListener('mousedown', () => eightButton.style.cssText = 'background-color: #E3E3FF');
eightButton.addEventListener('mouseup', () => {
    eightButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('8')
});
//9
nineButton = document.querySelector('.nine-button');
nineButton.addEventListener('mousedown', () => nineButton.style.cssText = 'background-color: #E3E3FF');
nineButton.addEventListener('mouseup', () => {
    nineButton.style.cssText = 'background-color: #D2DAFF'
    numberButton('9')
});