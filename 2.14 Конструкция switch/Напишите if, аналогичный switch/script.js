'use strict';

let user_input = prompt('Please, type the browser name: ', ''); //user input

if (user_input == ('Edge')) { //for Edge we have a certain answer
    alert("You've got the Edge!" );
    } else if (user_input =='Chrome'||user_input =='Firefox'||user_input =='Safari'||user_input =='Opera') {
    alert('Okay we support these browsers too' ); //for this group will be a define answer
    } else { //all others inputs 
    alert('We hope that this page looks ok!');
    }


