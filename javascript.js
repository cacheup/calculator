const display = document.querySelector('.display');
display.textContent = '0';

let operand = NaN;
let equalsBtnClicked = false;

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', populate));

function populate(e) {
  if(equalsBtnClicked == true){
    display.textContent = e.target.textContent;
    equalsBtnClicked = false;
  }
  else{
    if(display.textContent == '0'){
      display.textContent = e.target.textContent;
    }
    else{
      display.textContent += e.target.textContent;
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
    case '*':
      return multiply(num1,num2);
    case '/':
      return divide(num1,num2);
  }
}