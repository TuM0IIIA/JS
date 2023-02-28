'use strict';



function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5); 
        return arr
};

let arr = [1, 2, 3];

shuffle(arr); // arr = [3, 2, 1]
alert(arr);

shuffle(arr); // arr = [2, 1, 3]
alert(arr);

shuffle(arr); // arr = [3, 1, 2]
alert(arr);




