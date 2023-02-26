'use strict';

 //let user_input = prompt('Please, input your word: ', ' ') ; //user input for each input
 
 function checkSpam(variable) { //func to check the word inside the str
    let upper_case = variable.toUpperCase(); //change all letters to upper-case
    if ((upper_case.includes('VIAGRA')) || (upper_case.includes('XXX'))){ //here we change all given words to upper-case
        return true;  //if found in the str
    }else {
        return false; //if not found in the str
    }
    };
    
//alert(checkSpam(user_input)); //show the result

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );





