'use strict';

/**
 * @author Федоров Александр @thelvv
 */

/**
 * Функция рисует ёлку заданной высоты из звёздочек и возвращает результат - строку.
 *
 * @param {Number} number - высота ёлки
 * @returns {String}
 * @example
 *
 * tree(4);
 * // => *
 *      ***
 *     *****
 *       |
 */
const tree = (number) => {
    /**
     * Константа, хранящая аргумент, приведенный к типу Number.
     *
     * @type {Number}
     */
    const intNumber = Number(number);

    /**
     * Проверка аргумента на правильность типа, значение, большее 2 (и неотрицательность), принадлежность к числам,
     * целочисленность и величину.
     */
    if ((!(number)) || (number < 3) || (isNaN(number)) ||
        ((!(Number.isInteger(intNumber))) || (!(Number.isSafeInteger(intNumber))))) {
        return null;
    }

    /**
     * Константа, хранящая максимальную ширину ёлки.
     *
     * @type {Number}
     */
    const maxWidth = 2 * number - 3;

    /**
     * Массив размера высота-1 (уровни, где есть звездочки), по которому будет происходить
     * итерация в reduce. Заполняется натуральными числами.
     *
     * @type {Number[]}
     */
    const NumbersOfLevels = Array.from({length: (number - 1)}, (v, k) => k+1);

    /**
     * Переменная, хранящая конечный ответ.
     * С помощью reduce собирается ёлка.
     *
     * @type {String}
     */
    let answer = NumbersOfLevels.reduce((prev, curr) => {
        /**
         * Константа, хранящая количество звездочек на данном уровне ёлки.
         *
         * @type {Number}
         */
        const numOfStars = curr * 2 - 1;

        /**
         * Строка, содержащая все пробелы до звездочки.
         *
         * @type {String}
         */
        const indent = ' '.repeat((maxWidth - numOfStars) / 2);

        /**
         * Конкатенация кусков строки в общую - уровень ёлки, а также с ее предыдущим уровнем.
         */
        return prev + indent + '*'.repeat(numOfStars) + indent + '\n';
    }, '');

    /**
     * Строка, содержащая все пробелы до '|'.
     *
     * @type {String}
     */
    const indent = ' '.repeat((maxWidth - 1) / 2);

    /**
     * Добавление нижнего уровня ёлки.
     */
    answer += indent + '|' + indent + '\n';

    return answer;
}
