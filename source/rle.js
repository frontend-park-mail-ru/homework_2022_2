'use strict';

/**
 * реализация RLE сжатия без дополнительных условий
 * @param {string} str - исходная строка.
 * @throws {TypeError} - Некорректный тип аргумета
 * @throws {TypeError} - Некорректная строка
 * @example 
 * //returns 'A3B'
 * rle('AAAB');
 * @returns {string} ansString - RLE сжатая строка.
 */
const rle = (str) => {
  if (typeof str !== 'string' && !(str instanceof String)) {
      throw new TypeError("Incorrect object");
  }

  const reg = /[^A-Z]/;
  if (reg.test(str)) {
    throw new TypeError("Incorrect string");
  }

  const arrFromString = str.split('');
  let letterCounter = 1;
  let prevSymb = '';

  let ansString = arrFromString.reduce((ansString, curSymb) => {
    (curSymb !== prevSymb) ? (
      ansString += `${(letterCounter !== 1) ? letterCounter : ''}` + curSymb,    
      letterCounter = 1
      ) : letterCounter++;
    prevSymb = curSymb;
    return ansString;
}, '');

  if (letterCounter !== 1) {
    ansString += letterCounter;
  }

  return ansString;
}
