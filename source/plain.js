'use strict';

/**
 * Превращение многомерного массива в одномерный 
 * @param  {Array} srcArray - исходный многомерный массив, который нужно слить в один одномерный
 * @returns {Array} Одномерный массив
 */
function plain(srcArray) {
    const stack = srcArray.slice();
    const plained = [];

    while (stack.length) {
        const elem = stack.pop();
        if (Array.isArray(elem)) {
            stack.push(...elem.slice());
        }
        else {
            plained.push(elem);
        }
    }

    return plained.reverse();
}
