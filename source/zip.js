'use strict';

/**
 * Возвращает единственный объект, содержащий все поля из объектов-параметров,
 * объекты сами состоят из примитивных типов
 *
 * @param {Object[]} Object массив сложных объектов
 * @return {Object}
 * @throws исключения невалидных аргументов: Неправильный тип
 * @example zip({question: "123123"}, {}, {id: 22}) = {question: "fvasdga", id: 22}
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
