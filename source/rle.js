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
    throw new TypeError("Incorrect object");
  }
  const arrFromString = str.split('');
  let letterCounter = 1;
  let prevSymb = '';
  let ansString = arrFromString.reduce((ansString, curSymb) => {
    if(curSymb < 'A' || curSymb > 'Z') {
      throw new Error("Incorrect string");
    }
    if (curSymb !== prevSymb) {
      if (letterCounter !== 1) {
          ansString += letterCounter;
          letterCounter = 1;
      } 
      prevSymb = curSymb;
      return ansString += curSymb; 
    }
    letterCounter++;
    prevSymb = curSymb;
    return ansString;
}, '');
  if (letterCounter !== 1) {
    ansString += letterCounter;
  }
  return ansString;
}
