'use strict';
 
function Accumulator(startingValue) { //func with arg 'startingValue'
  this.value = startingValue;  //

  this.read = function() {  // to add the input value 
  let user_input = +prompt('What you wanna add?', 0);  //we prompt the user
  this.value += user_input; //and add to the value already stored
  };
}

let result = new Accumulator(1); 
result.read(); //add inputted value to the stored result
result.read();
alert(result.value); //output
  