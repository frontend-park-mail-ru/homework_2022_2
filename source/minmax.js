'use strict'
/**
 *  Функция minmax находит минимальное и максимальное значения в строке.
 *  Возвращает массив, в котором первый элемент — это минимальное число в строке, второй элемент — максимальное.
 * 
 * Функция принимает 1 параметр stringWithNumbers типа string
 */
const minmax = (stringWithNumbers) => {
    if (typeof stringWithNumbers !== 'string') {
        throw new Error('INVALID_ARGUMENT_TYPE');
    }
    const regularExpression = /(-?(\d+)?\.?\d+e?-?(\d+)?)|(-?Infinity)/g;
    const numbers = stringWithNumbers.match(regularExpression)?.map(v => +v);
    return (numbers === undefined ? [undefined, undefined] : [Math.min(...numbers), Math.max(...numbers)]);
};
