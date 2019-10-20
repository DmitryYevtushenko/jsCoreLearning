'use strict';

let vasya = { name: 'Vasya', age: 25 };
let petya = { name: 'petya', age: 37 };
let masha = { name: 'masha', age: 21 };

let users = [ vasya, petya, masha ];

function getAverageAge(arr) {
  let sum = arr.reduce( (prevValue, item) => prevValue + item.age, 0 );
  return Math.round(sum / arr.length);
}

log('hello');
