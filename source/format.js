"use strict"

/**
 * @author Макаров Александр @Aralary
 * */

/**
 * Функция принимает массив, по которому в дальнейшем будет построена матрица
 * и возвращает массив с длинами столбцов будущей матрицы
 *
 * @param {Object} numbers - входной массив чисел
 * @param {number} colsCount - количество столбцов в будущей матрице
 * @throws {TypeError} - во входном массиве элемент является не числом
 * @return {Object} массив с длинами столбцов будущей матрицы
 * */
function colsWidthArr(numbers, colsCount) {
    let res = [];
    for (let i = 0; i < colsCount; ++i) {
        let tempCol = [];
        for (let j = i; j < numbers.length; j += colsCount) {
            numbers[j] = +numbers[j];
            if (!isFinite(numbers[j])) {
                throw TypeError("its not a numbers");
            }
            tempCol.push(numbers[j]);
        }
        res[i] = Math.max(...(tempCol.map(el => String(el).length)));
    }
    return res;
}

/**
 * Функция строит матрицу по входному массиву чисел и возвращает матрицу в виде строки.
 * У матрицы элементы в столбце одной длины, но все столбцы не обязательно одной ширины.
 *
 * @param {Object} numbers - входной массив чисел
 * @param {number} cols - количество столбцов в будущей матрице
 * @throws {*} - прокидывает исключение дальше
 * @return {String} - матрица записанная в строку
 * */

let format = (numbers, cols) => {
    try {
        let res = "";
        const widths = colsWidthArr(numbers, cols);
        for (let i = 0; i < numbers.length; i += cols) {
            for (let j = 0; (j < cols) && (i + j < numbers.length); ++j) {
                res += (" ".repeat(widths[j] - String(numbers[i + j]).length) + numbers[i + j]);
                (j < cols - 1 && i + j !== numbers.length - 1) ? res += ' ' :
                    (j === cols - 1 && i + j !== numbers.length - 1) ? res += '\n' : false;
            }
        }
        return res;
    } catch (e) {
        throw e;
    }
}