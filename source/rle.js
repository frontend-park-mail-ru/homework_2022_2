'use strict';

/**
 * реализация RLE сжатия без дополнитеных условий
 * @param {string} str - исходная строка.
 * @returns {string} ansString - RLE сжатая строка.
 */

const rle = (str) => {
  let ansString = "";
  let letterCounter = 1;
  if (!str) {
    return "Incorrect object";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] < 'A' || str[i] > 'Z') {
        return "Incorrect string";
    }
    if (str[i] != str[i - 1]) {
      if (letterCounter != 1) {
        ansString += letterCounter;
      }
      letterCounter = 1;
      ansString += str[i];
    } else {
      letterCounter++;
    }
  }
  if (letterCounter != 1) {
    ansString += letterCounter;
  }
  return ansString;
}
