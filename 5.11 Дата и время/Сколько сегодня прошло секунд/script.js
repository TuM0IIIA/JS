'use strict';

function getSecondsToday() {
    let now = new Date();
    
    let actual = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let res = now - actual; 
    return Math.round(res / 1000); 
}
    
alert( getSecondsToday() );
    