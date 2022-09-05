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
  n = Number(n);
  let result = "";
  let firstStr = "* ";
  firstStr = firstStr.repeat(Math.ceil(n/2) - 1).padEnd(n-1, "*");
  for(let i=0; i<n; i++) {
    i % 2 ==0 ? result+=firstStr.padEnd(n, firstStr[length-((n+1)%2)]) : result+=firstStr.padStart(n, firstStr[1])
    result+='\n'
  }
  return result;
}
