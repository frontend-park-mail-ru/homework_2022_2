'use strict';

/**
 * Превращение многомерного массива в одномерный 
 * @param  {Array} srcArray - исходный многомерный массив, который нужно слить в один одномерный
 * @returns {Array} Одномерный массив
 */
const plain = (srcArray) => {
    if (!Array.isArray(srcArray)) {
        throw new TypeError('Invalid input data');
    }

    const stack = srcArray.slice();
    const plained = [];

    while (stack.length) {
        const elem = stack.pop();

        if (Array.isArray(elem)) {
            stack.push(...elem);
        } else {
            plained.push(elem);
        }
    }

    return plained.reverse();
}
