'use strict';

/**
 * Check if a number is natural
 * @param {number} num - target number
 * @returns {bool} result of checking
 */
const isNaturalNumber = num => (num > 0) && (Math.trunc(num) === num);

/**
 * Make function for for checking if any argument is a natural number
 * @param {number => bool} checkNaturalFunc - the function returning true if argument is 
 * natural number
 * @returns {any => number} function for checking if any argument is a natural number
 * Returns the equivalent number 
 */
function makeValidatorNatureNumber(checkNaturalFunc) {
  const NOT_NUMBER_ERR_TEXT = ' is not a number';
  const NOT_NATURAL_ERR_TEXT = ' is not a natural number';

  return function (num) {
    const numCasted = Number(num);
    if (!Number.isFinite(numCasted)) {
      throw TypeError(`${num}` + NOT_NUMBER_ERR_TEXT);
    }
    if (!checkNaturalFunc(numCasted)) {
      throw RangeError(`${num}` + NOT_NATURAL_ERR_TEXT);
    }
    return numCasted;
  }
}

/**
 * Find greatest common divisor using Euclid`s algorithm
 * @param {number | string} firstValue  - first natural number
 * @param {number | string} secondValue - second natural number
 * @returns {number} greatest common divisor
 * @throws {TypeError} Arguments is not a number
 * @throws {RangeError} Arguments is not a natural number
 */
function euclidRaw(firstValue, secondValue) {
  const naturalValidator = makeValidatorNatureNumber(isNaturalNumber);
  let firstNum = naturalValidator(firstValue);
  let secondNum = naturalValidator(secondValue);

  while ((firstNum > secondNum) ?
    (firstNum %= secondNum) :
    (secondNum %= firstNum)) { }

  return firstNum || secondNum;
}

/**
 * Find greatest common division in an array of number using Euclid`s algorithm
 * @param  {...number} numArr - array of natural number
 * @returns {number} greatest common division
 */
const euclid = (...numArr) => numArr.reduce(euclidRaw, numArr[0]);

