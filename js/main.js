'use strict';

let vasya = {name: 'Vasiliy', age: 25};
let petya = {name: 'Petr', age: 33};
let masha = {name: 'Masha', age: 23};

let users = [vasya, petya, masha];

let names = users.map(
    (item) => item.name
);

console.log(names);