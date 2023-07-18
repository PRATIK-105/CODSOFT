document.addEventListener('DOMContentLoaded', function() {
    const display1El = document.querySelector('.display-1');
    const display2El = document.querySelector('.display-2');
    const tempResultEl = document.querySelector('.temp-result');
    const numbersEl = document.querySelectorAll('.number');
    const operationEl = document.querySelectorAll('.operation');
    const equalEl = document.querySelector('.equal');
    const clearAllEl = document.querySelector('.all-clear');
    const clearLastEl = document.querySelector('.last-entity-clear');
  
    let display1Num = '';
    let display2Num = '';
    let result = null;
    let lastOperation = '';
    let haveDot = false;
  
    numbersEl.forEach(function(number) {
      number.addEventListener('click', function(e) {
        if (e.target.innerText === '.' && !haveDot) {
          haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
          return;
        }
        display2Num += e.target.innerText;
        display2El.innerText = display2Num;
      });
    });
  
    operationEl.forEach(function(operation) {
      operation.addEventListener('click', function(e) {
        if (!display2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (display1Num && display2Num && lastOperation) {
          mathOperation();
        } else {
          result = parseFloat(display2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
      });
    });
  
    equalEl.addEventListener('click', function() {
      if (!display2Num || !display1Num) return;
      haveDot = false;
      mathOperation();
      clearVar();
      display2El.innerText = result;
      tempResultEl.innerText = '';
      display2Num = result;
      display1Num = '';
    });
  
    clearAllEl.addEventListener('click', function() {
      display1Num = '';
      display2Num = '';
      display1El.innerText = '';
      display2El.innerText = '';
      result = null;
      tempResultEl.innerText = '';
    });
  
    clearLastEl.addEventListener('click', function() {
      display2El.innerText = '';
      display2Num = '';
    });
  
    function clearVar(name = '') {
      display1Num += display2Num + ' ' + name + ' ';
      display1El.innerText = display1Num;
      display2El.innerText = '';
      display2Num = '';
      tempResultEl.innerText = result;
    }
  
    function mathOperation() {
      if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(display2Num);
      } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display2Num);
      } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display2Num);
      } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(display2Num);
      } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(display2Num);
      }
    }
  });
  