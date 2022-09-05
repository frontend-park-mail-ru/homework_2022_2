'use strict';

/**
 * Возвращает единственный объект, содержащий все поля из объектов-параметров
 *
 * @param {Object[]} Object массив сложных объектов
 * @return {Object}
 * @throws исключения невалидных аргументов: Неправильный тип
 */

const isComplexData = (value) => {
    return Object.prototype.toString.call(value) == '[object Object]'
}

const zip = (...objects) => {
    return objects.reduce((res, cur) => {
        if (!isComplexData(cur)) {
            throw new TypeError("Arguments must be objects - custom data types");
        }

        for (let key in cur) {
            if (!res.hasOwnProperty(key)) {
                res[key] = cur[key];
            }
        }

        return res;
    }, {});
};
