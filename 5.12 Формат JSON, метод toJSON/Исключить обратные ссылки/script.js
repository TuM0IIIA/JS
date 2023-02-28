'use strict';

let room = {
    number: 23
};
let meetup = {
    title: "Meeting",
    occupiedBy: [{name: "Ivanov"}, {name: "Petrov"}],
    place: room
};
    // цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
alert( JSON.stringify(meetup, function replacer(key, value) {  
    return (key != "" && value == meetup) ? undefined : value;
}));
    