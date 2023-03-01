"use strict"
/*
here the infinite loop to prompt the user input only numbers 
I didn't hav etime to connect it

while (true) { //create infinite loop
  let user_input = +prompt (" Please, input a number: "); //change prompt to int format
  if (user_input == null ) break; //if Esc was pressed - break the loop
  if (isNaN(user_input)) continue; //if not the number  
  //alert (user_input);
  break   // break the loop
};
*/


let calculator = { 
   sum() {  // function to calculate the result
      if ((this.a >9007199254740991 )||(this.b >9007199254740991 )){
         return BigInt(this.a + this.b)
      }else{
     return typeof(this.a + this.b);
      }
   },
   split() {
      if ((this.a >9007199254740991 )||(this.b >9007199254740991 )){
         return BigInt(this.a / this.b)
      }else{
         return this.a / this.b;
      }
   },   
   mul() {
      if ((this.a >9007199254740991 )||(this.b >9007199254740991 )){
         return BigInt(this.a * this.b)
      }else{
         return this.a * this.b;
      }
   },
   subtract() {
      if ((this.a >9007199254740991 )||(this.b >9007199254740991 )){
         return BigInt(this.a - this.b)
      }else{
         return this.a - this.b;
      }
   },
   read() {
     this.a = +prompt('a?', 0);
     this.c = prompt("choice the action ('*', '/', '-' ?', ' ' "); // here we prompt tje user
     this.b = +prompt('b?', 0);
   
     if (this.c === '*'){  // based ion his choice we calculate the result using functions above
     alert( this.mul() );      
   } else if(this.c === '+'){
     alert( this.sum() );
   } else if(this.c === '/'){
     alert( this.split() );
   } else if(this.c === '-'){
     alert( this.subtract() );      
   } else { 
     alert ("You made a mistake");   
   }
 }  // weak point of this code is using 'a', 'b', 'c' instead of full name of variables
 };

 calculator.read();