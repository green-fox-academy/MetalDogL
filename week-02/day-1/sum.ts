// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result


function sum (target:number){
    let result = 0;
  
    for(let i:number = 0 ; i < target ; i++){
      result += i;
    }
  
    return result;
  }

  // CHECK IF CORRECT