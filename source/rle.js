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
  let ansString = "";
  let letterCounter = 1;
  if (typeof str !== 'string') {
    throw new TypeError("Incorrect object");
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] < 'A' || str[i] > 'Z') {
      throw new Error("Incorrect string");
    }
    if (str[i] != str[i - 1]) {
      if (letterCounter !== 1) {
        ansString += letterCounter;
      }
      letterCounter = 1;
      ansString += str[i];
    } else {
      letterCounter++;
    }
  }
  if (letterCounter !== 1) {
    ansString += letterCounter;
  }
  return ansString;
}
