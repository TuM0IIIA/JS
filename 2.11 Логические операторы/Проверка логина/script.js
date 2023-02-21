'use strict';

let variable = prompt('Who is there?'); //we prompt the user for input

if ( variable == "" || variable == null ) {  // if input is empty OR Esc was pressed
    alert("Declined");  // access declined
} else if  ( variable == "Admin" ){  // if input is "Admin"
    let promptPassword = prompt('Please, enter the password: ')  //we prompt the user to input password
        if (promptPassword ==  "" || promptPassword == null  ){  // if password is empty OR Esc was pressed
            alert("Declined");  // access declined  
        } else if (promptPassword ==  "Boss" ){  // if password is "Boss"
            alert("Good day, Sir"); //we greet the Boss :)
        } else {  // if was inputted smth else 
            alert ("Wrong Password")  //we notify the user 
        }
}  else { // if was inputted smth else 
    alert("I don't know who you are")  //we notify the user 
}  
