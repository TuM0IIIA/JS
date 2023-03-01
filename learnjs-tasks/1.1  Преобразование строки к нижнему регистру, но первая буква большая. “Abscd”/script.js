'use strict';

let check = "mY mOtHer TOld ME someday I WOUld BuY ";  //check the func 

alert(titleCase(check));  // show the res in the browser

let user_input = prompt ('Please, input your text here: ')  //prompt the user for text

alert(titleCase(user_input));  // show the res for 'user_input' in the browser


/**
 * return string with the capitalized  first symbol
 */
function titleCase(value) {
    let first_val = value[0].toUpperCase();  //find first elem and change to uppercase
    let second_value = value.substr(1).toLowerCase(); //split second elem and change to lowercase
    let res = first_val + second_value;  //concatenate previous answers

    return res;
}




    

    





