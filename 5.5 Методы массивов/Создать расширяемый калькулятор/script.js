'use strict';

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function(val) {

    let split = val.split(' '),
      a = +split[0],
      operator = split[1],
      b = +split[2]

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[operator](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
};
    
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

let resresult = powerCalc.calculate("16 / 4");
alert( resresult ); // 20