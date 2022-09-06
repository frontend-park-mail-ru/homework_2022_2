'use strict';

/**
 * Функция возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" вверх
 * @param {Array} array - Массив массивов с элементами произвольных типов
 * @returns {Array} Результирующий массив, в котором все элементы на одном уровне вложенности
 */
const plain = (array) => {
    const stack = [...array];
    const result_array = [];

    while (stack.length) {
        const current_element = stack.pop();
        
        if (Array.isArray(current_element)) {
            stack.push(...current_element);
        } else {
            result_array.push(current_element);
        }
    }

    return result_array.reverse();
}
