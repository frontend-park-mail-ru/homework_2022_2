'use strict';

/**
 * Функция возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" вверх
 * @param {Array} array - Массив массивов с элементами произвольных типов
 * @returns {Array} Результирующий массив, в котором все элементы на одном уровне вложенности
 * @throws {TypeError} Исключение при некорретных входных данных (не массив, вызов без аргументов, слишком много аргументов)
 */
const plain = (array) => {
    if (!Array.isArray(array)) {
        throw new TypeError('Incorrect argument');
    }

    const stack = [...array];
    const resultArray = [];

    while (stack.length) {
        const currentElement = stack.pop();

        if (Array.isArray(currentElement)) {
            stack.push(...currentElement);
        } else {
            resultArray.push(currentElement);
        }
    }

    return resultArray.reverse();
}
