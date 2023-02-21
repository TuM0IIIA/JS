'use strict';

let a = 5 > 4
let b = "ананас" > "яблоко"
let c = "2" > "12"
let d = undefined == null
let e = undefined === null
let f = null == "\n0\n"
let g = null === +"\n0\n"



alert( `5 > 4 = ${a}\n`);  //output true
alert(`"ананас" > "яблоко" = ${b}\n` );  //output false
alert( `"2" > "12" = ${c}\n`);  //output true
alert(`undefined == null = ${d}\n` );  //output true
alert( `undefined === null = ${e}\n`);  //output false
alert(`null == "\n0\n" = ${f}\n` );  //output false
alert( `null === +"\n0\n" = ${g}\n`);  //output false
