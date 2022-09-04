'use strict';

function chess (n) {
  if(!(parseInt(n) >= 0 || parseInt(n) <= 0)){ //проверка на то, что n - число
    return null;
  }
  n = Math.floor(n); // округление аргумента в меньшую сторону
  if(n<=1){
    return null;
  }
  let result = "";
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++){
      if((i+j)%2==0){
        result+="*";
      } else {
        result+=" ";
      }
    }
    result+="\n";
  }
  return result;
}