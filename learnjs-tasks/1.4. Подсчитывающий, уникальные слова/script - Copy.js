'use strict';
let words = [];
let counts = [];

let final_res = {};

let strings = "My mother told me my me we mother me ";


function uniqueWordCount(str) { 
    let set = new Set(str.split(' '));
    return set.size;
  }

alert(uniqueWordCount(strings))


function unique(arr) {

    let final_res = [];

    for (let value of arr) {
        if (!(final_res.includes(value))) {
            final_res.push(value);
        }
    }
    return final_res        
};


let unique_words = unique(strings);
alert (unique(strings));


function unique(first, second) {
    for (let word in second){

        let res =(first.split(word).length - 1);
        return res;
    };
    

}

alert (unique(strings, unique_words));



//let unique = new Set(strings);
//alert(unique.size);