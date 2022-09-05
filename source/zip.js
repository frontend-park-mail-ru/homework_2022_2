'use strict';

/**
 * Возвращает единственный объект, содержащий все поля из объектов-параметров,
 * объекты сами состоят из примитивных типов
 *
 * @param {Object[]} Objects - массив сложных объектов
 * @return {Object} - объект со всеми полями из аргументов
 * @throws {TypeError} исключения невалидных аргументов: Неправильные типы
 * @example
 * zip({question: "What is ?"}, {}, {id: 22}, {question: "how are you}) returns {question: "What is ?", id: 22}
 */

const isComplexData = (value) => {
    return Object.prototype.toString.call(value) == '[object Object]'
}

const zip = (...objects) => {
    if (objects.length === 0) {
        throw new SyntaxError('Function was called without arguments');
    }

    return objects.reduce((res, cur) => {
        if (!isComplexData(cur)) {
            throw new TypeError("Arguments must be objects - custom data types");
        }

        for (let key in cur) {
            if (!res.hasOwnProperty(key)) {
                if (isComplexData(cur[key])) {
                    throw new TypeError("Objects must consist of primitive types");
                }
                res[key] = cur[key];
            }
        }

        return res;
    }, {});
};
