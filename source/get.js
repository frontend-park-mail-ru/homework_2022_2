'use strict';

/**
*  Возвращает значение свойства объекта по заданному пути.
*
* @param {Object} obj - объект
* @param {string} propPath - путь к свойству
* @returns {*} значение свойства
* @throws {TypeError} - Некорректный тип аргуметов
*/
const get = (obj, propPath) => {
    if (!(typeof obj === 'object' && obj !== null) || !(typeof propPath === 'string')) {
        throw new TypeError('Incorrect type of arguments');
    }

    let props = propPath.split('.').filter(prop => !!prop);
    for (let prop of props) {
        obj = obj[prop];
        if (obj === undefined) {
            break;
        }
    }
    return obj;
};
