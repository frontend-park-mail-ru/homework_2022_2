'use strict';

/**
 * This function make partition for quick sort.
 * 
 * @param {Array} dataArray - input data
 * @param {Number} leftIndex - start index
 * @param {Number} rightIndex - finish index
 * @param {Array} keyArray - keys to sort
 * @returns index of pivot.
 */
function partition(dataArray, leftIndex, rightIndex, keyArray) {
    let pivotIndex = leftIndex;

    for (let i = leftIndex; i < rightIndex; i++) {
        for (let j = 0; j < keyArray.length; j++) {
            if (keyArray.length < 2 || dataArray[i][keyArray[j]] != dataArray[rightIndex][keyArray[j]]) {
                if (dataArray[i][keyArray[j]] <= dataArray[rightIndex][keyArray[j]]) {
                    [dataArray[i], dataArray[pivotIndex]] = [dataArray[pivotIndex], dataArray[i]];
                    pivotIndex++;
                    break;
                }
            }
        }
    }

    [dataArray[pivotIndex], dataArray[rightIndex]] = [dataArray[rightIndex], dataArray[pivotIndex]]
    return pivotIndex;
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
 * @param {Array} dataArray - array of data.
 * @param {Array} keyArray - key for sorting.
 * @return {Array} sorted array according rules.
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

    const copyToArray = dataArray.concat();
    let copyToKeys = keyArray.concat();
    let keyStack = [];
    
    keyStack.push(copyToKeys.shift());
    while (keyStack.length > 0) {
        let stack = [];

        stack.push(0);
        stack.push(dataArray.length - 1);
        while (stack[stack.length - 1] >= 0) {
            let end = stack.pop();
            let start = stack.pop();

            let pivotIndex = partition(copyToArray, start, end, keyStack);

            if (pivotIndex - 1 > start) {
                stack.push(start);
                stack.push(pivotIndex - 1);
            }

            if (pivotIndex + 1 < end) {
                stack.push(pivotIndex + 1);
                stack.push(end);
            }
        }

        if (keyStack.length > 1) {
            keyStack.pop();
        }
        if (copyToKeys.length > 0) {
            keyStack.push(copyToKeys.shift());
        } else {
            keyStack = [];
        }
    }
    return copyToArray;
}
