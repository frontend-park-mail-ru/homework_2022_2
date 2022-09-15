'use strict';

/**
 * Implementation of quick sort.
 * 
 * @param {array} dataArray - input array of data.
 * @param {function} compare - compare function.
 * @returns sorted array.
 */
function quickSort(dataArray, compare = (left, right) => left > right) {
    if (dataArray.length < 2) {
        return dataArray;
    }
    let pivot = dataArray[0];

    const leftArray = [];
    const rightArray = [];

    for (let i = 1; i < dataArray.length; i++) {
        if (compare(pivot, dataArray[i]) > 0) {
            leftArray.push(dataArray[i]);
        } else {
            rightArray.push(dataArray[i]);
        }
    }

    return quickSort(leftArray, compare).concat(pivot, quickSort(rightArray, compare));
}

/**
 * This function sorts data of array by following rules:
 *      1. Function doesn't change empty array;
 *      2. Function doesn't change array if key's fields are empty;
 *      3. Function sorts an array by numeric property;
 *      4. Function sorts an array by string property;
 *      5. Function realises sustainable sorting;
 *      6. Function sorts by several fields.
 *      7. Function returns empty array in case which input is garbage.
 * 
 * @param {array} dataArray - array of data.
 * @param {array} keyArray - key for sorting.
 * @return {array} sorted array according rules.
 * @throws {TypeError} Argument is not an Array type.
 */
function sorting(dataArray, keyArray) {
    if (!Array.isArray(dataArray) || !Array.isArray(keyArray)) {
        throw new TypeError('invalid input');
    }
    if (dataArray.length == 0 || keyArray.length == 0) {
        return dataArray;
    }
    if ((dataArray === []) || (keyArray === [])) {
        return dataArray;
    }

    let result = dataArray.concat();
    for (let i = keyArray.length - 1; i >= 0; i--) {
        result = quickSort(result, (left, right) => {
            if (left[keyArray[i]] > right[keyArray[i]]) {
                return 1;
            } 
            if (left[keyArray[i]] < right[keyArray[i]]) {
                return -1;
            }
            return 0;
        });
    }

    return result;
}
