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
 * @param {Array} numbers - array of data.
 * @param {Array} key     - key for sorting.
 * @return sorted array according rules.
 */
function sorting(numbers, key) {
    if (numbers == [] || key == []) {
        return numbers;
    }
    if (!Array.isArray(numbers) || !Array.isArray(key)) {
        return [];
    }

    numbers.sort(function (left, right) {
        let orderArray = [];

        key.forEach((item) => {
            let order = null;
            if (typeof (left[item]) == 'string') {
                order = left[item].localeCompare(right[item]);
            } else {
                order = left[item] - right[item];
            }
            orderArray.push(order);
        });

        let resultOrder = 0;
        orderArray.forEach((item) => {
            resultOrder = resultOrder || item;
        });
        return resultOrder;
    });

    return numbers;
}
