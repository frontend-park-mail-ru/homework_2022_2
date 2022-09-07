'use strict'
/**
 *  Функция minmax находит минимальное и максимальное значения в строке.
 *  Возвращает массив, в котором первый элемент — это минимальное число в строке, второй элемент — максимальное.
 * 
 * @param {string} stringWithNumbers - строка содержащаяя числа.
 * @return {number[]} массив из двух чисел (минимальное и максимальное).
 * @throws {INVALID_ARGUMENT_TYPE} - выбрасывается ошибка, если аргумент stringWithNumbers не типа string.
 */
const minmax = (stringWithNumbers) => {
    if (typeof stringWithNumbers !== 'string') {
        throw new Error('INVALID_ARGUMENT_TYPE');
    }
    const regularExpression = /(-?(\d+)?\.?\d+e?-?(\d+)?)|(-?Infinity)/g;
    const numbers = stringWithNumbers.match(regularExpression)?.map(v => Number(v));
    return (numbers ? [Math.min(...numbers), Math.max(...numbers)] : [undefined, undefined]);
};
