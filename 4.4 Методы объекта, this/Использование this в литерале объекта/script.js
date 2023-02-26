'use strict';

function makeUser() {  //func is empty
  return {  // all the code down below is returning from the func
    name: "John",  
    ref: this
  };
}


let user = makeUser();  // func is still empty

alert( user.ref.name );   // cannot show name