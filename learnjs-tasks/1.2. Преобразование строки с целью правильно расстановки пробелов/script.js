'use strict';

//let user_inputut = prompt ('Please, choice Did I solve it? ', ''); //user input
//let example = 'Вот пример строки,в которой используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'
let eng_example = 'Here tr sample of,a string where used commas.After commas should be spaces , and before signs there shoud not .    Here we have seferal spaces, they should be deleted.';

eng_example = eng_example.replace('  ',' ');
///eng_example = eng_example.replace('  ,',',');
//eng_example = eng_example.replace(' ,',',');
//eng_example = eng_example.replace(' ,',',');

alert(eng_example);

function fixString(input){
    let i, len, arr, output, Rside, Lside, RsideIsNum, LsideIsNum;
    
    arr = input.split(",");
    output = "";

    for(i=1, len=arr.length; i<len; i++){
        Lside = arr[i-1];
        Rside = arr[i];

        LsideIsNum = /\d/.test(Lside.charAt(Lside.length-1));
        RsideIsNum = /\d/.test(Rside.charAt(0));

        output += "," + ((LsideIsNum && RsideIsNum)?"":" ") + Rside;
    }

    return (arr[0] + output).replace(/\s\s+/g," ");
}

alert(fixString(eng_example));

/*
function ask(question) { //func with parameters
    let res = question.split('');
    return  res;
    }

alert (ask(eng_example));
let array = (ask(eng_example));
////////////////////////////////////////////////////
let output = "";
let var_1 = ' ';
let var_2 = ',';


for(i=1, len=array.length; i<len; i++){
    //check_left = array[i-1];
    check_right = array[i];
    if (check_right == var_2){
        alert("HHHHHH");
    }

   // alert (check_left.charAt(check_left.length-1));
    }   

   
let var_1 = ' ';
let var_2 = ',';

let final_output = [];

for (let symbol of array.values()) {

    alert (symbol); // all the leters 
    
}


*/

//array = array.filter(value => value !== " ");
//alert (array);
/*
let var_1 = ' ';
let var_2 = ',';

let final_output = [];




function ask_1(array){

    let final_output = [];

    for (var i = array.length - 1; i >= 0; i--) {
        if ((array[i] == ',')&&((array[i] +1) == ' ') ) {
            final_output.push(); 
        } else if ((array[i] == ' ')&&((array[i] +1) == ' ')) {
            final_output.push('');
        }
       }
    
    let res = final_output.toString()
    return res
}

alert (ask_1(array));

*/



/*
function ask(question) { //func with parameters
    let res = question.split('');
    return  res;
    }

alert (ask(eng_example));
let array = (ask(eng_example));


//array = array.filter(value => value !== " ");
//alert (array);


function ask_1(array){

    let final_output = [];

    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == ',') {
            final_output.push(', ');
        } else {
            final_output.push();
        }
       }
    
    let res = final_output.toString()
    return res
}

alert (ask_1(array));
*/