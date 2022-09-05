'use strict';

/**
 *
 * @param {string} str - Исходная строка
 * @param {boolean} flag
 * @returns {string} - Результат операции удаления повторяющихся символов
 */
const letters = (str, flag) => {
    /**
     * Проверка, состоит ли строка из одного повторяющегося символа
     * @param {string} str - исходная строка
     * @returns {boolean} - результат проверки
     */
    const isStrConsistsOfOneChar = (str) => {
        const temp = str[0];
        if (str.some((elem) => elem !== temp)) return false;
        return true;
    };

    /**
     * Удалит все повторяющиеся символы кроме первого
     * @param {string} str - исходная строка
     * @returns {string}
     */
    const saveFirstLetters = (str) => {
        const res = str.split('').filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        return res.join('');
    };

    /**
     * Удалит все повторяющиеся символы кроме последнего
     * @param {string} str - исходная строка
     * @returns {string}
     */
    const saveLastLetters = (str) => {
        const res = str.split('').filter((value, index, self) => {
            return self.lastIndexOf(value) === index;
        });
        return res.join('');
    };

    /**
     * Удалит все повторяющиеся символы
     * @param {string} str - исходная строка
     * @returns {string} - строка без повторяющихся символов
     */
    const saveOnlyUniqueLetters = (str) => {
        const res = str.split('').filter((value, index, self) => {
            return self.lastIndexOf(value) === self.indexOf(value);
        });
        return res.join('');
    };

    if (typeof str !== 'string') throw new Error('Некорректный тип данных');
    if (str === '' || isStrConsistsOfOneChar(str.split(''))) return '';
    if (flag === undefined) return saveOnlyUniqueLetters(str);

    let res = '';

    flag ? (res = saveFirstLetters(str)) : (res = saveLastLetters(str));

    return res;
};
