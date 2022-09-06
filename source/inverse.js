'use strict';

/**
 * функция inverse меняет порядок элементов в массиве на противоположный.
 * Если в функцию вторым аргументом передаётся число — то переставляются все элементы
 * массива кроме нескольких первых (количество зависит от числа). Если число
 * отрицательное — то на месте остаются элементы в конце массива
 *
 * @param {array} массив элементов, который требуется инвертировать.
 * @param {integer} index - элемент, до/после которого массив остается неизменным.
 * @return {array} результирующий массив.
 */

const inverse = (array, index) => {
 	let result;

 	if (!Array.isArray(array)) {
 		throw new Error('Unexpected array parameter!');
 	}

 	if (index != undefined && !Number.isInteger(index)) {
 		throw new Error('Unexpected index parameter!');
 	}

 	index == undefined || index == 0 ? result = array.reverse() : 
 		Math.abs(index) >= array.length ? result = array : 
 			index > 0 ? result = array.splice(0, index).concat(array.reverse()) :
 				result = array.splice(0, array.length + index).reverse().concat(array);


 	return result;
};
