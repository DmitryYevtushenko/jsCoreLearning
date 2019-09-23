'use strict';

function Calculator() {
  let operations = {
    '+': (a, b) => (a + b),
    '-': (a, b) => (a - b),
  };

  this.calculate = (str) => {
    let strToArray = str.split(' '),
        a = +strToArray[0],
        b = +strToArray[2],
        op = strToArray[1];

    if (!operations[op]) return NaN;

    return operations[op](a, b);
  };

  this.addMethod = (name, func) => {
    operations[name] = func;
  }
}

let calc = new Calculator;
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate('3 * 7') );