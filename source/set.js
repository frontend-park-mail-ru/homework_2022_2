'use strict';

/**
 * Устанавливает значение  вложенного свойства объекта по пути к нему
 *
 * @param {object} obj - исходный объект
 * @param {string} path - путь к свойству
 * @param val {(number|string|array|object)}- устанавливаемое значение
 * @returns {object} - измененный объект
 * @throws {TypeError} - выбрасывает исключение при некорректных аргументах
 */
const set = (obj, path, val) => {
    if (!(typeof path === 'string' || path instanceof String)) {
        throw TypeError('Invalid Argument: path is not string');
    }
    if (typeof obj !== 'object' || obj === null) {
        throw TypeError('Invalid Argument: obj is not an object');
    }
    if (val === undefined) {
        throw TypeError('Invalid Argument: val is undefined');
    }
    if (!path.includes('.')) {
        throw TypeError('Incorrect Path');
    }
    const keys = path.split('.');
    keys.reduce((object, key, index, array) => {
        if (key === '') {
            if (index === array.length - 1) {
                throw TypeError('Incorrect Path');
            }
            return object;
        }

        if (index === array.length - 1) {
            object[key] = val;
            return object;
        }

        if (!Array.isArray(object[key]) && typeof object[key] !== 'object') {
            object[key] = {};
        }

        object = object[key];
        return object;
    }, obj);
    return obj;
};
