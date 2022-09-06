'use strict';

/**
 * Функция проверят что аргумент имеет тип object - сложный пользовательский тип
 *
 * @param  value - любая переменная
 * @return {Boolean} - если тип это сложный пользовательский то true
 * @example
 * isComplexData("What is ?") returns false
 * isComplexData({data: "What is ?"}) returns true
 */

const isComplexData = (value) => {
    return Object.prototype.toString.call(value) == '[object Object]'
}

/**
 * Возвращает единственный объект, содержащий все поля из объектов-параметров,
 * объекты сами состоят из примитивных типов
 *
 * @param {Object[]} objects - массив сложных объектов
 * @return {Object} - объект со всеми полями из аргументов
 * @throws {Error, TypeError} исключения невалидных аргументов: Неправильные типы, отсутствие аргументов
 * @example
 * zip({question: "What is ?"}, {}, {id: 22}, {question: "how are you}) returns {question: "What is ?", id: 22}
 */

const zip = (...objects) => {
    if (objects.length === 0) {
        throw new Error('Function was called without arguments');
    }

    return objects.reduce((acc, item) => {
        if (!isComplexData(item)) {
            throw new TypeError("Arguments must be objects - custom data types");
        }

        return {...item, ...acc}
    }, {});
};
