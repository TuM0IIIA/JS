'use strict';

let age = +prompt('Please, type your age: ', ''); //user input

function checkAge(age) {
    if (age > 18) {
    return true;
   // } else {  //without 'else' our func return 'true' value and we can work with it
  //  return confirm('Parents allowed?'); //with 'else' function processing became not transparent
  //  }
    }
}


if (checkAge(age)){  //the func treatment by true/false return value
    alert ('Welcome');
} else {
    alert ('See you');
}