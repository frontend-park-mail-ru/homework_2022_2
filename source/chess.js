'use strict';
/**
 * 
 * @param {number} n - размер шахматной доски
 * @returns {string} 
 */
const chess = n => {

  if(n<1 || n>100){
    throw new Error("Функция chess принимает на вход натуральные числа от 2 до 100");
  }

  if(!isFinite(n)){
    throw new Error("Некорректный входной параметр функции chess");
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
/**
 * 
 * @param {*} n 
 * @throws исключения невалидных аргументов: отсутствие агрументов, неправильные типы, 
 * аргумент не натурален, аргумент не входит в интервал допустимых значений 
 */
const validNumber = n => {

  if(n<1 || n>100){
    throw new Error("Функция chess принимает на вход натуральные числа от 2 до 100");
  }

  if(!isFinite(n)){
    throw new Error("Некорректный входной параметр функции chess");
  }

  if(!Number.isInteger(n)){
    throw new Error("Входной параметр не является целым числом");
  }
}
