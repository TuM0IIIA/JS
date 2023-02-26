'use strict';

function randomInteger(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);

}

alert( randomInteger(1, 5) ); // 1.2345623452
alert( randomInteger(1, 5) ); // 3.7894332423
alert( randomInteger(1, 5) ); // 4.3435234525

