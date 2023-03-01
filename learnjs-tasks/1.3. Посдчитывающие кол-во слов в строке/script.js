'use strict';

let user_input = prompt ('Please, input your text here: ', ''); //user input
//let example = 'My mother told me someday I would buy a galley with good oars';

function count(input) { 
    return input.split(" ").length;
  }
    
alert(count(user_input));