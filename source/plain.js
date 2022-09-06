'use strict';

/**
 * Функция возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" вверх
 * @param {Array} array - Массив массивов с элементами произвольных типов
 * @returns {Array} Результирующий массив, в котором все элементы на одном уровне вложенности
 * @throws {Error} Исключение при некорретных входных данных (не массив, вызов без аргументов, слишком много аргументов)
 */
const plain = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('Incorrect argument');
    }

    return array.reduce((acc, val) => 
        acc.concat(Array.isArray(val) ? plain(val) : val), []);
}
