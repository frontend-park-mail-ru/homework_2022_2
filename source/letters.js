'use strict';

/**
 *
 * @param {string} str - Исходная строка
 * @param {boolean} flag
 * @returns {string} - Результат операции удаления повторяющихся символов
 * @throws {TypeError} - Неправильный тип аргумента str
 */
const letters = (str, flag) => {
    /**
     * Проверка, состоит ли строка из одного повторяющегося символа
     * @param {string} str - исходная строка
     * @returns {boolean} - результат проверки
     */
    const isStrConsistsOfOneChar = (str) => {
        const temp = str[0];
        return !str.some((elem) => elem !== temp);
    };

    /**
     * Удалит все повторяющиеся символы кроме первого
     * @param {string} str - исходная строка
     * @returns {string}
     */
    const saveFirstLetters = (str) => {
        return str.split('').filter((value, index, self) => {
            return self.indexOf(value) === index;
        }).join('');
    };

    /**
     * Удалит все повторяющиеся символы кроме последнего
     * @param {string} str - исходная строка
     * @returns {string}
     */
    const saveLastLetters = (str) => {
        return str.split('').filter((value, index, self) => {
            return self.lastIndexOf(value) === index;
        }).join('');
    };

    /**
     * Удалит все повторяющиеся символы
     * @param {string} str - исходная строка
     * @returns {string} - строка без повторяющихся символов
     */
    const saveOnlyUniqueLetters = (str) => {
        return str.split('').filter((value, index, self) => {
            return self.lastIndexOf(value) === self.indexOf(value);
        }).join('');
    };

    if (typeof str !== 'string') throw new TypeError('Некорректный тип str');
    if (str === '' || isStrConsistsOfOneChar(str.split(''))) return '';
    if (flag === undefined) return saveOnlyUniqueLetters(str);

    return flag ? saveFirstLetters(str) : saveLastLetters(str);
};
