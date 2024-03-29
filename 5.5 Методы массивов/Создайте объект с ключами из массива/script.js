'use strict';

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
};

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
    ];

let usersById = groupById(users);
alert (usersById);

//res = Object.fromEntries(users.map(key => [key, 0]));
//alert (res);