'use strict';

/**
 * Устанавливает значение  вложенного свойства объекта по пути к нему
 *
 * @param {Object} obj - исходный объект
 * @param {string} path - путь к свойству
 * @param val {(number|string|Array|Object)}- устанавливаемое значение
 * @returns {Object} - измененный объект
 * @throws {TypeError} - выбрасывает исключение при некорректных аргументах
 */
const set = (obj, path, val) => {
    if (typeof path !== "string" || typeof obj !== "object" || typeof val === "undefined") {
        throw TypeError("Invalid Argument");
    }
    if (path.indexOf(".") === -1) {
        throw TypeError("Incorrect Path");
    }
    const keys = path.split('.');
    keys.reduce((object, key, index, array) => {
        if (index === array.length - 1) {
            object[key] = val;
            return object;
        }
        if (key === "") {
            return object;
        }
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
        return object;
    }, obj);
    return obj;
};