'use strict';

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name); //use func to show the name

alert( names ); // Вася, Петя, Маша