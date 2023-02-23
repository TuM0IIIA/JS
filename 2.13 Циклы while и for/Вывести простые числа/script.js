'use strict';

here:  //point to restart the cycle
for (let i = 2; i <= 10; i++) {  //create a value in the range of 0-10
    for (let k = 2; k < i; k++) { //create a value in the range 2-i to compare
        if (i % k == 0) continue here; //if we found a number able to divided by any other numbers - restart  
    }
alert( i ); //if i divisible  only on itself - we show the result
}
