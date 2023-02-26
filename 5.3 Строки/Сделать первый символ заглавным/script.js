'use strict';

 let user_input = prompt('Please, input your word: ', ' ') ; //user input
 
 function ucFirst(user_input) { //func to change the first letter to capital letter
    if (!user_input) return user_input; //if user input = '' - return ''
    return user_input[0].toUpperCase() + user_input.slice(1); //change the first letter to capital letter
    };
    

alert(ucFirst(user_input)); //show the result




