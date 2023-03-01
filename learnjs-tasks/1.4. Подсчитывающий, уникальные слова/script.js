
let strings = "My mother told me my me we mother me My mother told me my me we mother me";

//sorry I didn't have time for comments
      
function count(string) {

    let array = string.split(" ");
    let count = {};
    let result = '';

    for (let i = 0; i < array.length; i++) {

      if(count[array[i]]) {
        count[array[i]]+=1;
      } else {
        count[array[i]] = 1;
      }
    }

    Object.keys(count).map(key => {
    result += key + '-'+ count[key] + ', '+'\n'; 
    });

    return result;

  }
  

alert(count(strings));

