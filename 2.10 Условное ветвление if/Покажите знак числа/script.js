'use strict';

let age = prompt('Type the number: ');


let message = (+age > 0) ? '1' : // check if the number>0 and change to int format
    (+age < 0) ? '-1' : // check if the number<0 and change to int format
    (+age == 0) ? '0': // check if the number=0 and change to int format
    ("Are you sure? We need the numbers ") // in case unpredictable input

alert( message );
