'use strict';

function unique(arr) {

    let final_res = [];

    for (let value of arr) {
        if (!(final_res.includes(value))) {
            final_res.push(value);
        }
    }
    return final_res        
};
    
let strings = ["krishna", "krishna", "enough", "enough",
    "enough", "enough", "krishna", "krishna", ":-O"
];

alert( unique(strings) ); // "krishna", "enough", ":-O"
    


