'use strict';

let a = "" + 1 + 0
let b = "" - 1 + 0
let c = true + false
let d = 6 / "3"
let e = "2" * "3"
let f = 4 + 5 + "px"
let g = "$" + 4 + 5
let k = "4" - 2
let l = "4px" - 2
let m = " -9 " + 5
let n = " -9 " - 5
let o = null + 1
let p = undefined + 1
let q = " \t \n" - 2



alert( `"" + 1 + 0 = ${a}\n`);  //output "10 str"
alert(`"" - 1 + 0 = ${b}\n` );  //output -1
alert( `true + false = ${c}\n`);  //output 1
alert(`6 / "3" = ${d}\n` );  //output 2
alert( `"2" * "3" = ${e}\n`);  //output 6
alert(`4 + 5 + "px" = ${f}\n` );  //output "9px"
alert( `"$" + 4 + 5 = ${g}\n`);  //output $45
alert(`"4" - 2 = ${k}\n` );  //output 2
alert( `"4px" - 2 = ${l}\n`);  //output NaN
alert(`" -9 " + 5 = ${m}\n` );  //output " -9 5 "
alert( `" -9 " - 5 = ${n}\n`);  //output -14
alert(`null + 1 = ${o}\n` );  //output 1
alert( `undefined + 1 = ${p}\n`);  //output NaN
alert(`" \t \n" - 2 = ${q}\n` );  //output -2