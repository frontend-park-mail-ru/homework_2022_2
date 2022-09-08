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

    const props = propPath.split('.').filter(prop => !!prop);

    let propObj = obj;
    props.every((prop) => {
        propObj = propObj[prop];
        return propObj;
    });

    return propObj;
};

