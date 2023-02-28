'use strict';

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true to the relation with prototype
alert( a[toString.call] );
alert( {}.toString.call(a) );
