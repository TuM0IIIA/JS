'use strict';

const number = +prompt('Type the number between 0 and 3',''); //we use '+' to change prompt to int format


switch (number) { 
    case 0: //if user input is 0
    alert('Your input is 0');
    break;
    case 1://if user input is 1
    alert('Your input is 1');
    break;
    case 2:  //for both of 2 and 3 
    case 3:  //we donn't split value 3 & 3 by brake
    alert('Your input is 2, but maybe also 3');
    break;
    default:
    alert('between 0 and 3, please'); //in case user input is different

}
 
