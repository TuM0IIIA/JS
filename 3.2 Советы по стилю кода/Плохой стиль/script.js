'use strict';

function pow(x,n)  // missed space
{  // I would move it up                
  let result=1;  // missed spaces
  for(let i=0;i<n;i++) {result*=x;} // missed spaces and best practice to split the logic in '{' 
  return result; 
}
let x=prompt("x?",''), n=prompt("n?",'')  // missed spaces
if (n<=0) // missed spaces
{  // i would move it up
alert(`degree ${n} not supported, input degree, greater than 0`);
}  
else // else should go without changing line after upper curly braces
{ //should be in the same line with 'else'
  alert(pow(x,n)) // spaces and ';' was missed
}


