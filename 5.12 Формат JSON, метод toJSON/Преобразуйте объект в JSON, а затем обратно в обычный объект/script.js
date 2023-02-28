'use strict';

let user = {
    name: "Vasiliy, son of Ivan",
    age: 35
};
    
let json = JSON.stringify(user);

alert(typeof json); //string
alert(json);  //{"name":"Vasiliy, son of Ivan","age":35}

let new_json = JSON.parse(json);

alert(typeof new_json); //object

alert(new_json); // [object Object]
alert(typeof new_json); 