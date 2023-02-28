'use strict';

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let res = arr.reduce((a, b) => a + b.age, 0); //using reduce 
    let final_res = res / arr.length; // to calculate overall  age
    return final_res;
};

alert( getAverageAge(arr) );






