'use strict';

let styles = ["Jazz", "Blues"]; //create an array

alert(styles);

styles.push("Rock-and-roll"); //add rock-and-roll

alert(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classic"; // put 'Classic' in the middle instead of "Blues"

alert(styles);

styles.shift() ; // remove the first element

alert(styles);

styles.unshift("Rap", "Reggae"); // put to the start of the array

alert(styles);
    

    





