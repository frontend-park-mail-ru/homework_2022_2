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

    return str.split('').filter((value, index, self) => {
        return flag === undefined
                    ? self.lastIndexOf(value) === self.indexOf(value)
                    : flag
                        ? self.indexOf(value) === index
                        : self.lastIndexOf(value) === index;
    }).join('')
};
