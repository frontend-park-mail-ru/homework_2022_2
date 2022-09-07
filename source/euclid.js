'use strict';

/**
 * Check if a number is natural
 * @param {number} num - target number
 * @returns {bool} result of checking
 */
const isNaturalNumber = num => (num > 0) && (Math.trunc(num) === num);

/**
 * Make function for for checking if any argument is a natural number
 * @param {number => bool} checkNatNum - the function returning true if argument is 
 * natural number
 * @returns {any => number} function for checking if any argument is a natural number
 * Returns the equivalent number 
 */
function makeIsNatureNumber(checkNatNum) {
  const errStrNum = ' is not a number';
  const errStrNatNum = ' is not a natural number';

  return function (num) {
    const numCasted = +num;
    if (!Number.isFinite(numCasted)) {
      throw TypeError(`${num}` + errStrNum);
    }
    if (!checkNatNum(numCasted)) {
      throw RangeError(`${num}` + errStrNatNum);
    }
    return numCasted;
  }
}

/**
 * Find greatest common divisor using Euclid`s algorithm
 * @param {number} num1  - first natural number
 * @param {number} num2 - second natural number
 * @returns {number} greatest common divisor
 * @throws {TypeError} Arguments is not a number
 * @throws {RangeError} Arguments is not a natural number
 */
function euclidRaw(num1, num2) {
  const checkerNatNum = makeIsNatureNumber(isNaturalNumber);
  num1 = checkerNatNum(num1);
  num2 = checkerNatNum(num2);

  while ((num1 > num2) ? (num1 %= num2) : (num2 %= num1)) { }

  return num1 || num2;
}

/**
 * Find greatest common division in an array of number using Euclid`s algorithm
 * @param  {...number} numArr - array of natural number
 * @returns {number} greatest common division
 */
const euclid = (...numArr) => numArr.reduce(euclidRaw, numArr[0]);

