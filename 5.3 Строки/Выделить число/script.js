'use strict';

 //let user_input = prompt('Please, input text: ', '') ; //user input 
 
 function extractCurrencyValue(str) { //func takes numbers out of str
    let result = +str.slice(1); //change to integers format
    return result
  
    };
    
alert( extractCurrencyValue('$120') === 120 );
    

    


