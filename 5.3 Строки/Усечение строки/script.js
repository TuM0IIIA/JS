'use strict';

 //let variable = prompt('Please, input your sentence: ', '') ; //user input 
//let len_param = +prompt('Please, input qty od digits , you would like to stay: ', '') ; //user input 
 
 function truncate(variable, len_param) { //func with the  sentence and numbers digits we would like to stay
    let result = variable.substring(0, len_param); //change all letters to upper-case
    return result
  
    };
    
alert(truncate("that what I would like to say about this topic:", 20)); // that what I would li

alert(truncate("Hello, everyone!", 20)); // Hello, everyone!
    





