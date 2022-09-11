'use strict';

/**
 * реализация RLE сжатия без дополнительных условий
 * @param {string} str - исходная строка.
 * @throws {TypeError} - Некорректный тип аргумета
 * @throws {Error} - Некорректная строка
 * @example 
 * //returns 'A3B'
 * rle('AAAB');
 * @returns {string} ansString - RLE сжатая строка.
 */
const rle = (str) => {
  if (typeof str !== 'string') {
    if(!(str instanceof String)){
      throw new TypeError("Incorrect object");
    }
  }
  const reg = /[^A-Z]/;
  if (reg.test(str)) {
    throw new Error("Incorrect string");
  }
  const arrFromString = str.split('');
  let letterCounter = 1;
  let prevSymb = '';
  let ansString = arrFromString.reduce((ansString, curSymb) => {
    (curSymb !== prevSymb) ? (
      (letterCounter !== 1) ? (ansString += letterCounter):(1),    
      letterCounter = 1,
      ansString += curSymb
      ) : letterCounter++;
    prevSymb = curSymb;
    return ansString;
}, '');
  if (letterCounter !== 1) {
    ansString += letterCounter;
  }
  return ansString;
}
