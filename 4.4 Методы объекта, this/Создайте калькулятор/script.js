'use strict';
 // I added subtraction and division
let calculator = { 
    sum() {  // function to calculate the result
      return this.a + this.b;
    },
    split() {
      return this.a / this.b;
    },    
    mul() {
      return this.a * this.b;
    },
    subtract() {
      return this.a - this.b;
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

