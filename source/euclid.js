'use strict';

/**
 * Check if a number is natural
 * @param {number} num - target number
 * @returns {bool} result of checking
 */
const isNaturalNumber = num => (num > 0) && (Math.trunc(num) === num);

/**
 * Find greatest common divisor using Euclid`s algorithm
 * @param {number} num1  - first natural number
 * @param {number} num2 - second natural number
 * @returns {number} greatest common divisor
 * @throws {TypeError} Arguments is not a number
 * @throws {RangeError} Arguments is not a natural number
 */
function euclidRaw(num1, num2) {
  let localNum1 = +num1;
  let localNum2 = +num2;
  if (!Number.isFinite(localNum1)) {
    throw TypeError(`${num1} is not a number`);
  }
  if (!Number.isFinite(localNum2)) {
    throw TypeError(`${num2} is not a number`);
  }
  if (!isNaturalNumber(localNum1)) {
    throw RangeError(`${num1} is not a natural number`);
  }
  if (!isNaturalNumber(localNum2)) {
    throw RangeError(`${num2} is not a natural number`);
  }

  while (localNum1 !== 0 && localNum2 !== 0) {
    if (localNum1 > localNum2) {
      localNum1 %= localNum2;
    } else {
      localNum2 %= localNum1;
    }
  }
  return (localNum1 == 0) ? localNum2 : localNum1;
}

/**
 * Find greatest common division in an array of number using Euclid`s algorithm
 * @param  {number} numArr - array of natural number
 * @returns {number} greatest common division
 */
const euclid = (...numArr) => numArr.reduce(euclidRaw, numArr[0]);

