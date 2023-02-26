'use strict';

let user = {};  // create empty object

alert ( `"It's shown user here: " ${user}`); //commentary for output
user = {
  name: "John", // change name 
};

alert ( `"It's shown user.name here: " ${user.name}`);  //commentary for output

user = {
  surname: "Smith", // change surname 
};

alert ( `"It's shown user.surname here: " ${user.surname}`);  //commentary for output

user.name = "Pete"; // change name 

alert ( `"It's shown user.name here: " ${user.name}`);  //commentary for output

delete user.name; // delete name 

alert ( `"It's shown user.name here: " ${user.name}`);  //commentary for output