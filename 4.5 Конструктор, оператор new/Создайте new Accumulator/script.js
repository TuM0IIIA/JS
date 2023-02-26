'use strict';
 
 let ladder = {
    step: 0,
 
    up(){
      this.step++;
      return this;  //each function should return the result
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { 
       alert( this.step );
       return this;
    },
  };

  ladder.up().up().down().showStep().down().showStep(); 

 // ladder.up().showStep();
 // ladder.up().up().up().up().showStep();
 // ladder.up().up().down().showStep().down().showStep(); 
