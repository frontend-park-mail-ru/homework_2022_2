'use strict';

/**
 * Превращение многомерного массива в одномерный 
 * @param  {Array} srcArray - исходный многомерный массив, который нужно слить в один одномерный
 * @returns {Array} Одномерный массив
 */
function plain(srcArray) {
    let resArr = [];

    for (let elem of srcArray) {
        if (Array.isArray(elem)) {
            resArr.push(...plain(elem));
        }
        else {
            resArr.push(elem);
        }
    }

    return resArr;
}