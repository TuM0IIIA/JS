'use strict';

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1); //sort a & b  by (we add age )
};


sortByAge(arr); // теперь: [vasya, masha, petya]

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя



