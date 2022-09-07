'use strict';

var constants = {
    firstElement: 0,
    secondElement: 1
}

/**
 * Function compares two variables.
 * 
 * @param {Any} field 
 * @returns sorted pair
 */
function byField(field) {
    return (leftValue, rightValue) => leftValue[field] > rightValue[field] ? 1 : -1;
}

/**
 * This function sorts data of array by following rules:
 *      1. Function doesn't change empty array;
 *      2. Function doesn't change array;
 *      3. Function sorts an array by numeric property;
 *      4. Function sorts an array by string property;
 *      5. Function realises sustainable sorting;
 *      6. Function sorts by several fields.
 * 
 * @param {Array} numbers array of data.
 * @param {Array} key key for sorting.
 * @return sorted array according rules.
 */
function sorting(numbers, key) {
    if (key.length == 0) {
        return numbers;
    } else if (key.length == 1) {
        numbers.sort(byField(key));
    } else if (key.length == 2) {
        numbers.sort(function (left, right) {
            let firstOrder = left[key[constants.firstElement]] - right[key[constants.firstElement]];
            let secondOrder = left[key[constants.secondElement]] - right[key[constants.secondElement]];
            return firstOrder || secondOrder;
        });
    } 
    return numbers;
}
