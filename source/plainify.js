'use strict';

/**
 * Преобразует объект с вложенными свойствами в plain-объект
 * 
 * @param {object} nested - Объект с вложенными свойствами
 * @param {string} propertyName - Имя свойства
 * @returns {object} - plain-объект
 * @throws {TypeError} - Если аргумент имеет неверный тип
 * @throws {Error} - Если аргумент является пустым объектом
 * @example
 * // returns {'foo': 'bar', 'baz': 42}
 * plainify({foo: 'bar', baz: 42})
 */
const plainify = (nested, propertyName = '') => {
    if (typeof nested !== 'object' || nested instanceof String) {
        throw new TypeError('Invalid data was passed to the function');
    }

    if (nested === null) {
        throw new TypeError('A null argument was passed to the function');
    }

    if (Object.keys(nested).length == 0) {
        if (propertyName)
            return {[propertyName]: undefined};
        throw new TypeError('Function argument must not be an empty object');
    }

    return Object.entries(nested).reduce((plainObj, [key, value]) => {
        const newPropertyName = `${propertyName}${propertyName ? '.' : ''}${key}`; // добавление ключа к имени свойства
        return Object.assign(
            plainObj,
            typeof value === 'object' ? plainify(value, newPropertyName) : {[newPropertyName]: value}); // копирование свойств в целевой объект
    }, {}); // для каждого элемента масссива свойств вызывается функция обратного вызова
    // возвращаемое значение функции предоставляется как арагумент при следующем вызове функции
}
