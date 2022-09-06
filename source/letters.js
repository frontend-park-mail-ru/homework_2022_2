'use strict';

/**
 *
 * @param {string} str - Исходная строка
 * @param {boolean} flag
 * @returns {string} - Результат операции удаления повторяющихся символов
 * @throws {TypeError} - Неправильный тип аргуметов
 */
const letters = (str, flag) => {
    if (typeof str !== 'string') throw new TypeError('Некорректный тип str');
    if (typeof flag !== 'boolean' && flag != undefined) throw new TypeError('Некорректный тип flag');

    if (str === '') return '';

    /**
     * 
     * @param {string} str - изначальная строка
     * @param {boolean} flag - флаг. Если true, то сохраняем первую встречающуюся букву, иначе - последнюю
     * @returns {string} - Строка с одним повторяющимся символом
     */
    const saveOneRepeatedLetter = (str, flag) => {
        return str.split('').filter((value, index, self) => {
            return flag
                ? self.indexOf(value) === index
                : self.lastIndexOf(value) === index;
        }).join('');
    }

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

    if (flag === undefined) return saveOnlyUniqueLetters(str);
    return saveOneRepeatedLetter(str, flag);
};
