'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name); //should be before this.
        this.name = name;
        this.created = Date.now();
    }
}
    
let rabbit = new Rabbit("White rabbit"); // Error: this is not defined
alert(rabbit.name);