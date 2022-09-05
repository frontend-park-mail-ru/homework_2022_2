'use strict';
/**
 * 
 * @param {number} n - размер шахматной доски
 * @returns {string}
 * @throws исключения в случае невалидного аргумента: пустого, не являющегося натуральным числом, 
 * бесконечного
 */
const chess = n => {
  if(n === null) {
    throw new Error("Пустое значение аргумента функции chess");
  }
  if(!isFinite(n)){
    throw new Error("Некорректный входной параметр функции chess");
  }

  if(n<1 || n>100){
    throw new Error("Функция chess принимает на вход натуральные числа от 2 до 100");
  }

  if(!Number.isInteger(Number(n))){
    throw new Error("Входной параметр не является целым числом");
  }

  if(n==1){
    return null;
  }

  let result = "";
  let helping = "* "
  // for(let i=0; i<n; i++) {
  //   for(let j=0; j<n; j++){
  //     if((i+j)%2==0){
  //       result+="*";
  //     } else {
  //       result+=" ";
  //     }
  //   }
  //   result+="\n";
  // }
  helping = helping.repeat(n/2);
  if(n%2 == 0){ 
  helping += helping[helping.length-2];
  } else {
  helping += "* ";
  }
  result += helping.substring(0, helping.length - 1);
  result += '\n';
  result += helping.substring(1, helping.length);
  result += '\n';
  result = result.repeat(n/2);
  if(result.split("\n").length - 1 < n){
    result += helping.substring(0, helping.length - 1);
    result += '\n';
  }
  return result;
}
