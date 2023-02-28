'use strict';

function sumInput() {   //the first function for input 
    let user_input = prompt('What you wanna add?', 0);  
    return user_input;     //return input
    };  
  
let all_numbers = []; //array to store the values

while(true) { // our cycle for checking the conditions

let result = sumInput(); //we take the user input

if  (result === "" || result === null || !isFinite(result)) { //check the conditions
    alert('You interrupted the cycle') //if we meet them - interrupt the cycle
    break;
};

all_numbers.push(+result); //if user input passed the checking we store the value in arr (as int)
alert (all_numbers);  // to see actual numbers in array
};

function calculation(given_array) { //this func calculates all the variables in our array
  let final_res = 0;
    for (let number of given_array) {
      final_res += number;
}
return final_res; // and return the number

};

alert (calculation(all_numbers)); //to see the result