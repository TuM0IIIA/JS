'use strict';

let age = +prompt('Please, type the browser name: ', ''); //user input

//with '||' sign 

function checkAge(age) {
    return (age > 18) || confirm ('Parents allowed ?');
}

//with '?' sign 

function checkAge(age) {
    return (age > 18) ? true: confirm ('Parents allowed ?');
}

