'use strict';

/**
 * Check if a number is natural
 * @param {number} num - target number
 * @returns {bool} result of checking
 */
const isNaturalNumber = num => (num > 0) && (Math.trunc(num) === num);

/**
 * Find greatest common divisor using Euclid`s algorithm
 * @param {number} num_1  - first natural number
 * @param {number} num_2 - second natural number
 * @returns {number} greatest common divisor
 * @throws {TypeError} Arguments is not a number
 * @throws {RangeError} Arguments is not a natural number
 */
function euclidRaw(num_1, num_2) {
  let local_num_1 = +num_1;
  let local_num_2_ = +num_2;
  if (!Number.isFinite(local_num_1)) {
    throw TypeError(`${num_1} is not a number`);
  }
  if (!Number.isFinite(local_num_2_)) {
    throw TypeError(`${num_2} is not a number`);
  }
  if (!isNaturalNumber(local_num_1)) {
    throw RangeError(`${num_1} is not a natural number`);
  }
  if (!isNaturalNumber(local_num_2_)) {
    throw RangeError(`${num_2} is not a natural number`);
  }

  while (local_num_1 !== 0 && local_num_2_ !== 0) {
    if (local_num_1 > local_num_2_) {
      local_num_1 %= local_num_2_;
    } else {
      local_num_2_ %= local_num_1;
    }
  }
  return (local_num_1 == 0) ? local_num_2_ : local_num_1;
}

/**
 * Find greatest common division in an array of number using Euclid`s algorithm
 * @param  {number} num_arr - array of natural number
 * @returns {number} greatest common division
 */
const euclid = (...num_arr) => num_arr.reduce(euclidRaw, num_arr[0]);

