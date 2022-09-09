'use strict';

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
 * @param {Array} dataArray - array of data.
 * @param {Array} key - key for sorting.
 * @return {Array} sorted array according rules.
 * @throws {TypeError} Argument is not an Array type.
 */
function sorting(dataArray, key) {
    if (!Array.isArray(dataArray) || !Array.isArray(key)) {
        throw new TypeError('invalid input');
    }
    
    if (dataArray === [] || key === []) {
        return dataArray;
    }
    
    const copyToArray = dataArray.concat();
    copyToArray.sort((left, right)  => {
        for (let item of key) {
            if (left[item] > right[item]) {
                return 1;
            }
            if (left[item] < right[item]) {
                return -1;
            }
        }
        return 0;
    });
    return copyToArray;
}
