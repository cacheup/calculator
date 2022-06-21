const display = document.querySelector('.display');
display.textContent = '0';

let displayModified = false;
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', populate));

let operand = NaN;
let operator = '';
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', operateCalc));

function populate(e) {
  if(displayModified == true){
    if(display.textContent == '0'){
      display.textContent = e.target.textContent;
    }
    else{
      display.textContent += e.target.textContent;
    }
  }
  else{
    display.textContent = e.target.textContent;
    displayModified = true;
  }
}

function operateCalc(e) {
  if(displayModified == true){
    if(isNaN(operand)){
      operand = +display.textContent;
      operator = e.target.textContent;
    }
    else{
      operand = operate(operand, +display.textContent, operator);
      display.textContent = operand.toString();
      operator = e.target.textContent;
    }
    displayModified = false;
  }
  else{
    if(isNaN(operand)){
      operand = +display.textContent;
      operator = e.target.textContent;
    }
  }
}

function add(num1,num2) {
  return num1 + num2;
}

function subtract(num1,num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2;
}

function operate(num1,num2,operation) {
  switch (operation) {
    case '+':
      return add(num1,num2);
    case '-':
      return subtract(num1,num2);
    case 'x':
      return multiply(num1,num2);
    case '÷':
      return divide(num1,num2);
  }
}