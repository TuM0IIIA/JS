'use strict';

let some_var = {};

function A() { 
  return some_var
  };
function B() { 
  return some_var
  };

let a = new A();
let b = new B();

alert( a == b ); 

// i didn't catch the point. this solution from the book.
