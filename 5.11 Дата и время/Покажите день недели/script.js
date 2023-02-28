'use strict';

function getWeekDay(date) {
    let days = ['Sun','Mon', 'Tues', 'Wedn', 'Thurs', 'Frid', 'Sat'];
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3); 

alert( getWeekDay(date) ); // Tues







