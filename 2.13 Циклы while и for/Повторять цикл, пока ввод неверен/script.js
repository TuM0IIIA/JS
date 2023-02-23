'use strict';

while (true) { //create infinite loop
   let user_input = +prompt ("Please, type any number > 100 : ") //change prompt to int format
   if (user_input == null ) break; //if Esc was pressed - break the loop
   if (user_input < 101) continue; //if the number>100 
   alert(`You are awesome! ${user_input} > 100! `) ; //notify the user
   break   // break the loop
}

//that was the proper answer
do {
    num = prompt("Введите число больше 100?", 0);
    } while (num <= 100 && num);