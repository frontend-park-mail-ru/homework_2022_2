'use strict';

/**
*  Меняет порядок элементов в массиве на противоположныйю.
*  Если в функцию вторым аргументом передаётся число — то переставляются все элементы массива кроме нескольких первых (количество зависит от числа).
*  Если число отрицательное — то на месте остаются элементы в конце массива.
*
* @param {array} aray - массив
* @param {number} order - число отвечающее за нетронутые элементы массива
* @throw {TypeError} wrong arguments
* @return {array} новый массив
* @example
* // returns [3,2,1]
* inverse([1,2,3],0);
* @example
* // returns [1,3,2]
* inverse([1,2,3],1);
* @example
* // returns [2,1,3]
* inverse([1,2,3],-1);
*/

const inverse = (array, order = 0) => {
    if (!Number.isInteger(order) || !Array.isArray(array)) {
        throw new TypeError('wrong arguments');
    }

    const localArray = [...array];
    const start = order > 0 ? order : 0;
    const numElements = localArray.length - Math.abs(order);

    localArray.splice(order, 0, ...localArray.splice(start, numElements).reverse());
    return localArray;
}
