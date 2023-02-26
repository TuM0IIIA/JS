'use strict';

function getRandomInt(min, max) { // use Math. library
   return  Math.random() * (max - min) + min;
 }


alert( getRandomInt(1, 5) ); // 1.2345623452
alert( getRandomInt(1, 5) ); // 3.7894332423
alert( getRandomInt(1, 5) ); // 4.3435234525

