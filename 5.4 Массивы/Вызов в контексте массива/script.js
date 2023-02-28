'use strict';

let arr = ["a", "b"];
arr.push(function() {
alert( this );
});
arr[2](); 

alert (arr); //as a conclusion we have an array with two values 'a' & 'b' 
// and function with 'alert(this)'