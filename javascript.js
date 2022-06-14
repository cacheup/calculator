const display = document.querySelector('.display');
display.textContent = '0';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', populate));

function populate(e) {
  if(!isNaN(e.target.textContent)){
    if(display.textContent == '0') {
      if(e.target.textContent != '0')
      display.textContent = e.target.textContent;
    }
    else {
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