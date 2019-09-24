'use strict';

let vasya = {name: 'Vasiliy', surname: 'Pupkin', age: 35, id: 1};
let petya = {name: 'Petr', surname: 'Ivanov', age: 41, id: 2};
let masha = {name: 'Masha', surname: 'Petrova', age: 23, id: 3};

let users = [vasya, petya, masha];

let userMapped = users.map(
    (user) => ({
      fullName: `${user.name} ${user.surname}`,
      id: user.id,
    })
);

console.log(userMapped);