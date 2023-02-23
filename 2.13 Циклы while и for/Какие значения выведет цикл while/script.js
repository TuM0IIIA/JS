'use strict';

let i = 0; // this cycle show us numbers 1,2,3,4 
while (++i < 5) alert( i ); // it goes through 5, but doesn't show it to us due to the mistake 5 !<5

let k = 0; // this cycle show us numbers 1,2,3,4,5
while (k++ < 5) alert( k );  // it goes through 5 and show it to us 
// due to the sequence of calculation - first it compares and after add 