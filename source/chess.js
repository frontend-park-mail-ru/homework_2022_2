'use strict';
/**
 * 
 * @param {number} n - размер шахматной доски
 * @returns {string} 
 * @throws исключения обрабатывают невалидные значения: некорретные типы данных, ненатуральные числа,
 * слишком большие числа, null, NaN и undefined
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
