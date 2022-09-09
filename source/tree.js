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
const tree = number => {
    /**
     * Проверка аргумента на правильность типа, значение, большее 2 (и неотрицательность), принадлежность к числам,
     * целочисленность и величину.
     */
    if ((!(number)) || (number < 3) || (!(typeof Number(number) === 'number')) || (!(Number.isInteger(Number(number)))) || (!(Number.isSafeInteger(Number(number))))) {
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
     * итерация в reduce.
     *
     * @type {numer[]}
     */
    let NumbersOfLevels = new Array(number - 1);

    /**
     * Заполнение массива натуральными числами.
     */
    for (let i = 0; i < number - 1; i++) {
        NumbersOfLevels[i] = i + 1;
    }

    /**
     * Переменная, хранящая конечный ответ.
     * С помощью reduce собирается ёлка.
     *
     * @type {String}
     */
    let answer = NumbersOfLevels.reduce(function (prev, curr) {
        /**
         * Переменная, хранящая количество звездочек на данном уровне ёлки.
         *
         * @type {Number}
         */
        let numOfStars = curr * 2 - 1;

        /**
         * Строка, содержащая все пробелы до звездочки.
         *
         * @type {String}
         */
        let indent = ' '.repeat((maxWidth - numOfStars) / 2);

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
    let indent = ' '.repeat((maxWidth - 1) / 2);

    /**
     * Добавление нижнего уровня ёлки.
     */
    answer += indent + '|' + indent + '\n';

    return answer;
}
