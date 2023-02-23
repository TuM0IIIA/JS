'use strict';


function checkMin(val_1, val_2) { //func takes two args
    if (+val_1 > +val_2) { //compares them
    alert(val_2); //and print out the lowest one
    } else {
    alert (val_1);
    }
    }
    

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
 
checkMin(2, 5);  //use the function
checkMin(3, -1);
checkMin(1, 1);