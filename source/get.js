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
    if (!(typeof obj === 'object' && obj) || !(typeof propPath === 'string')) {
        throw new TypeError('Incorrect type of arguments');
    }

    let cloneObj = {...obj};

    propPath = propPath.trim()
    propPath.split('.').filter(prop => !!prop).every((prop) => {
        cloneObj = cloneObj[prop];
        return cloneObj;
    });

    return cloneObj;
};

