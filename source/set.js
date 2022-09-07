'use strict';

/**
 * Устанавливает значение  вложенного свойства объекта по пути к нему
 *
 * @returns {string|TypeError} - измененный объект
 * @param o - исходный объект
 * @param path - путь к свойству
 * @param val - устанавливаемое значение
 */
const set = (o, path, val) => {
        const keys = path.split('.');
        let current = o;
        while (keys.length > 1) {
            const k = keys.shift();
            if (k === "") {
                continue
            }
            if (!(k in current)) {
                current[k] = {}
            }
            current = current[k];
        }
        current[keys.shift()] = val
        return o
    }
;