'use strict';

/*
I clearly understood the main logic here 
but I didn't have time to implement my own solution
3 out of 4 of down below I took from the network

"name-contains-fd&price-=2&quantity->5&description-ends-abc"
"name-starts-fd&quantity-=5"
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/

class Shop {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    };
};
 
String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;

Number.prototype['>'] = function(input) {
    return this > input;
};
Number.prototype['<'] = function(input) {
    return this < input;
};
Number.prototype['='] = function(input) {
    return this == input;
};
Number.prototype['<='] = function(input) {
    return this <= input;
};
Number.prototype['>='] = function(input) {
    return this >= input;
};
function filter(arr, str) {
    const strArr = str.split('&');
    const variables = strArr.map(item => ({
      variables: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));
 
    const final_res = arr.filter(input => {
        for (let variable of variables) {
        if (!input[variable.variables[0]][variable.variables[1]](variable.variables[2]))
               return false;
        };
        return true;
    });
    return final_res;
};

const start_str = 'name-starts-fd&quantity=5'
const str = "name-contains-fd&price-=2&quantity->5&description-ends-abc";
          //"name-contains-fd&price-=2&quantity->5&description-ends-abc"
 

const arr = [new Shop("Fish", 12, 8, "342565234dsfg"), new Shop("Chips", 7, 88, "thanks abc"),
    new Shop("cup of tea", 33, 57, "some abc"), new Shop("bad", 44, 16, "food abc"),
    new Shop("Marry", 3, 17, "food Poppins abc")
]; 

const final_res = filter(arr, str);
alert (final_res);

const second_final_res = filter(arr, start_str);
alert (second_final_res);