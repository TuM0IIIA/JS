'use strict';

let variable = +prompt('Type the number: ');

if ( variable < 14 || variable > 90 ) {  // if variant to check if the value 
    alert("true");  // with in 14-90 range
} else  {
    alert("false");
}    

if (!!( variable < 14 || variable > 90 )) { // != variant to check if the value
    alert("true");  // with in 14-90 range
} else  {
    alert("false");
}   
