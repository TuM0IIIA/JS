'use strict';

function getSecondsToTomorrow() {
    let now = new Date();
    
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let res = tomorrow - now; 
    return Math.round(res / 1000); 
}
    
alert (getSecondsToTomorrow())