'use strict';

let question = alert ('Please, choice Did I solve it? ', ''); //user notification



function ask(question, yes, no) { //func with parameters
    if (confirm(question)) yes()  //confirm the choice
    else no();
    }
    ask( 
    "DO you agree?", //choice question
    () => { alert("You DO agree."); },  //if OK was pressed
    () => { alert("You NOT agree."); }  //if CANCEL was pressed
    );
    

