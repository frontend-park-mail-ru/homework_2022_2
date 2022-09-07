'use strict';

/**
 * функция inverse меняет порядок элементов в массиве на противоположный.
 * Если в функцию вторым аргументом передаётся число — то переставляются все элементы
 * массива кроме нескольких первых (количество зависит от числа). Если число
 * отрицательное — то на месте остаются элементы в конце массива
 *
 * @param {array} array - массив элементов, который требуется инвертировать.
 * @param {number} index - элемент, до (в случае положительно значениея) или после (в случае отрицательно значения) которого массив остается неизменным. Целый.
 * @return {array} arr - массив для копирования передаваемого массива, с которым происходит работа в функции.
 */

const inverse = (array, index) => {
	if (!Array.isArray(array)) {
 		throw new Error('Unexpected array parameter!');
 	}

 	if (index != undefined && !Number.isInteger(index)) {
 		throw new Error('Unexpected index parameter!');
 	}

	let arr = array.slice();

 	if (index > 0) return arr.splice(0, index).concat(arr.reverse());

 	else if (index < 0) return arr.splice(0, arr.length + index).reverse().concat(arr);

 	return arr.reverse();
};
