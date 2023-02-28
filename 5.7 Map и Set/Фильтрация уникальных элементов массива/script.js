'use strict';

function unique(arr) {

    let final_res = Array.from(new Set(arr));

    return final_res        
};
    
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
