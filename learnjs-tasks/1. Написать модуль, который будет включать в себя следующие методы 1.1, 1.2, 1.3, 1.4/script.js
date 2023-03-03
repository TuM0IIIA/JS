'use strict';

let user_input = prompt ('Please, input your text here: ')  //prompt the user for text
// But I recommend to user the sample down below 

//let example = 'My ., -/ mother $ % ^ & * told $ % ^ & * me= -_  someday`~)()  I ;: {} would buy a galley with good 11 oars';

let the_fist_task =  titleCase(user_input);
alert("First - return string with the capitalized  first symbol:\n \n " + the_fist_task);  // show the res for 'user_input' in the browser
let the_second_task =  deleteSpaces(the_fist_task);  //starts next functions to pass the result to the browser
alert("The second point - we return string with deleted spaces:\n \n " + the_second_task);
let the_third_task =  countAllWords(the_second_task);
alert("The third task was to calculate words in the str: \n \n " + the_third_task);
let the_fourth_task =  countUniqueWords(the_second_task);
alert("The fourth task - calculate unique words in the str: \n \n " + the_fourth_task);

/**
 * 1.1
 * @return string with the capitalized  first symbol 
 */
function titleCase(value) {
    let first_val = value[0].toUpperCase();  //find first elem and change to uppercase
    let second_value = value.substr(1).toLowerCase();  //split second elem and change to lowercase
    let res = first_val + second_value;  //concatenate previous answers

    return res;
}

//alert(titleCase(res));

/**
 * 1.2
 * @return string with deleted spaces 
 */
function deleteSpaces(value) {

    let string = value.replace(/\s+/g, ' ');  // first we delete all excessive spaces

    //than check punctuation marks and delete spaces between tem and words
    let res = string.replace(/\s*([,.!?:;]+)(?!\s*$)\s*/g, '$1 '); 
      
    return res;
}

//alert(deleteSpaces(res));
 /**
 * 1.3 
 * @return calculated words in the str
 */   
 function countAllWords(input) { 
    // I found out this approach for regex later than others
    let wo_symbols_and_numbers = input.replace(/[^\p{L}\s]/gu, '');  //delete all symbols except letters
    
    let wo_spaces = wo_symbols_and_numbers.replace(/\s+/g,' ').trim();  //delete all additional spaces
  
    let res =  wo_spaces.split(" ").length; //change to array of str and return it length
    return res
  }    

//alert(countAllWords(res));

 /**
 * 1.4 
 * @return calculated unique words in the str
 */   
function countUniqueWords(string) {

    let wo_symbols_and_numbers = string.replace(/[^\p{L}\s]/gu, '');  //delete all symbols except letters 

    let wo_spaces = wo_symbols_and_numbers.replace(/\s+/g,' ').trim();  //delete all additional spaces
  
    let array = wo_spaces.split(" ");  //change to array of str 
    
    let count = {};  //container to store the value from checking cycle down below
    let result = ''; //collect the final result to show the user
  
    for (let i = 0; i < array.length; i++) { //cycle for checking
  
      if(count[array[i]]) { 
        count[array[i]] += 1;
      } else {
        count[array[i]] = 1;
      }
    }
  
    Object.keys(count).map(key => { //here we count values in object container
    result +=' ' + key + ' - '+ count[key] +'\n';  //the final res 
    });
  
    return result; 
  }  
  
  //alert(countUniqueWords(string));