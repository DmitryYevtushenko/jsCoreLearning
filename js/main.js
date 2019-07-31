'use strict';

//don't delete! use this as exercise decision
let number = prompt('Enter a number', '0');
//change on do while
let power = prompt('Exponentiation in?', '0');


function pow(a, b) {
  if (b === 1) return a;

  let result = a;

  for(let i = 2; i <= b; i++) {
    result *= a;
  }
  return result;
}



console.log( pow(number, power) );
