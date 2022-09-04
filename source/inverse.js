'use strict';

/**
*  Меняет порядок элементов в массиве на противоположныйю.
*  Если в функцию вторым аргументом передаётся число — то переставляются все элементы массива кроме нескольких первых (количество зависит от числа).
*  Если число отрицательное — то на месте остаются элементы в конце массива.
*
* @param {array} ar - массив
* @return {array} новый массив
*/

const inverse = (ar, order = 0) => Number.isSafeInteger(order) && order > 0 ? ar.slice(0, order).concat(ar.slice(order, ar.length).reverse()) : Number.isSafeInteger(order) && ar.slice(0, ar.length + order).reverse().concat(ar.slice(ar.length + order, ar.length));
