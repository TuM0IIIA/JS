'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

function topSalary(salaries) {

    let res = 0;
    let final_res = null;
    
    for(const [name, salary] of Object.entries(salaries)) {
        if (res < salary) {
            res = salary;
        final_res = name;
        }
    }
    
    return final_res;
}

alert (topSalary(salaries));





