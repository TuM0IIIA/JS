'use strict';

let messages = [ // preferable WeakMap
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
    ];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2023, 27, 02));





