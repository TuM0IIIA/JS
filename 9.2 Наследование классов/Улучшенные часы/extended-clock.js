'use strict';

class ExtendedClock extends Clock {
    constructor(arg) {
        super(arg);
        let { precision = 1000 } = arg;
        this.precision = precision;
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};
    