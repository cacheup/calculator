const display = document.querySelector('.display');
display.textContent = '0';

let displayModified = false;
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', populate));

let operand = NaN;
let operator = '';
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', operateCalc));

const equals = document.querySelector('.equals');
equals.addEventListener('click', evaluate);

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearCalc);

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
      if(!Number.isInteger(operand)){
        operand = operand.toFixed(3);
        operand = +operand;
      }
      if(operand.toString().length > 11){
        operand = operand.toExponential(5);
        display.textContent = operand;
        operand = +operand;
      }
      else{
        display.textContent = operand.toString();
      } 
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

function evaluate(e) {
  if(displayModified == true){
    if(!isNaN(operand)){
      operand = operate(operand, +display.textContent, operator);
      if(!Number.isInteger(operand)){
        operand = operand.toFixed(3);
        operand = +operand;
      }
      if(operand.toString().length > 11){
        operand = operand.toExponential(5);
        display.textContent = operand;
      }
      else{
        display.textContent = operand.toString();
      }
      operand = NaN;
      operator = '';
      displayModified = false;
    }
  }
}

function clearCalc(e) {
  display.textContent = '0';
  operand = NaN;
  operator = '';
  displayModified = false;
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
  if(num2 == 0){
    alert("How dare you!");
    return 0;
  }
  else{
    return num1 / num2;
  }
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