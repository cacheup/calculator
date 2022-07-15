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

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', punctuate);

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', deleteChar);

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
    if(operator != ''){
      const operatorElem = document.querySelector(`.${getOperatorName(operator)}`);
      operatorElem.classList.remove('pressed'); 
    }
  }
}

function operateCalc(e) {
  if(displayModified == true){
    if(isNaN(operand)){
      operand = +display.textContent;
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
    }
    displayModified = false;
    decimal.disabled = false;
    operator = e.target.textContent;
    e.target.classList.add('pressed');
  }
  else{
    if(isNaN(operand)){
      operand = +display.textContent;
      operator = e.target.textContent;
      decimal.disabled = false;
      e.target.classList.add('pressed');
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
  if(operator != ''){
    const operatorElem = document.querySelector(`.${getOperatorName(operator)}`);
    operatorElem.classList.remove('pressed');
  }
  operator = '';
  displayModified = false;
  decimal.disabled = false;
}

function punctuate(e) {
  if(displayModified == true){
    display.textContent += ".";
    decimal.disabled = true;
  }
  else{
    display.textContent = '0.';
    decimal.disabled = true;
    displayModified = true;
  }
}

function deleteChar(e) {
  if(displayModified == true){
    if(display.textContent.length != 1){
      if(display.textContent.charAt(display.textContent.length - 1) == '.'){
        decimal.disabled = false;
      }
      display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
    else{
      display.textContent = '0';
    }
  }
}

function getOperatorName(operatorChar) {
  switch (operatorChar) {
    case '+':
      return 'addition';
    case '-':
      return 'subtraction';
    case 'x':
      return 'multiplication';
    case '÷':
      return 'division';
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