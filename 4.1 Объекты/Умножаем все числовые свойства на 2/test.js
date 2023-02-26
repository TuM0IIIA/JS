'use strict';

  function multiplyNumeric(menu){  //function is working with menu parameters
    for (let key in menu) {  //for each element in menu we do check
      if (typeof menu[key] == 'number') {  // if this element is number
          menu[key]*=2;  //if so - multiplying it on 2 
      }
    } 
  };

