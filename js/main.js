'use strict';

function Calculator(name) {
  this.name = name;
  this.read = () => {
    this.operand1 = +prompt('Input num1', '0');
    this.operand2 = +prompt('Input num2', '0');
  };
  this.sum = () => this.operand1 + this.operand2;
  this.mul = () => this.operand1 * this.operand2;
}

let calculator = new Calculator('variant1');
calculator.read();

console.log(
    calculator,
    calculator.sum(),
    calculator.mul(),
    );