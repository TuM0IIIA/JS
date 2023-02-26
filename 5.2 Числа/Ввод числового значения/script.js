'use strict';

while (true) { //create infinite loop
   let user_input = +prompt ("Please, type any number : ") //change prompt to int format

   if (user_input == null || user_input == '') { //if Esc was pressed - break the loop
    alert('You interrupted the session ');
    break;
   };
   if (isNaN(user_input)) { //if not a number -restart
    continue;
   } else{
    alert(`You are awesome! ${user_input} is a number ! `) ; //notify the user
   };
   break   // break the loop
};




