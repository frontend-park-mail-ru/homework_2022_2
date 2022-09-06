'use strict';
/**
 * Функция, рисующая квадратную ASCII шахматную доску
 * @param {number} n - размер шахматной доски
 * @returns {string}
 * @returns {null}
 * @throws исключения в случае невалидного аргумента: пустого, не являющегося натуральным числом, 
 * бесконечного
 * @example
 * chess(4) return '* * 
 *                   * *
 *                  * *
 *                   * *'
 */
const chess = n => {

  if(!isFinite(n) || n===null){
    throw new TypeError("Некорректный входной параметр функции chess");
  }

  if(!Number.isInteger(Number(n))){
    throw new TypeError("Входной параметр не является целым числом");
  }

  if(n<1 || n>100){
    throw new RangeError("Функция chess принимает на вход натуральные числа от 2 до 100");
  }

  if(n==1){
    return null;
  }
  n = Number(n);
  let result = "";
  
  for(let i=0; i<n; i++) {
    result+="* ".repeat(n/2 + 1).substring(i%2, n + i%2);  
    result+='\n';
  }

  return result;
}
