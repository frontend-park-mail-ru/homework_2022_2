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
    const cols = new Array(colsCount);
    for (let i = 0; i < colsCount; ++i) {
        cols[i] = [];
    }
    numbers.forEach((el, index) => cols[index % cols.length].push(numbers[index]));
    return cols.map(col => Math.max(...(col.map(el => String(el).length))));
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

const format = (numbers, cols) => {
    if (cols > numbers.length || cols < 1 || !isFinite(cols)) throw Error("incorrect cols");
    const numbersChecked = numbers.map(el => {
        const num = Number(el);
        if (!isFinite(num)) {
            throw TypeError("its not a numbers");
        }
        return num;
    });
    let res = "";
    const widths = colsWidthArr(numbersChecked, cols);
    numbersChecked.forEach((el, index) => {
        const i = index % cols;
        res += String(el).padStart(widths[i]);
        const rowEnd = (i === cols - 1);
        if (index === numbersChecked.length - 1) return;
        res += rowEnd ? '\n' : ' ';
    });
    return res;
}
