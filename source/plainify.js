'use strict';

/**
 * Преобразует объект с вложенными свойствами в plain-объект
 * 
 * @param {Object} nested - Объект с вложенными свойствами
 * @param {string} propertyName - Имя свойства
 * @returns {Object} - plain-объект
 * @example
 * // returns {'foo': 'bar', 'baz': 42}
 * plainify({foo: 'bar', baz: 42})
 */
const plainify = (nested, propertyName = '') => {
    const propertyArray = Object.entries(nested); //получаем массив свойств объекта

    // функция обратного вызова
    const callbackFunction = (plainObj, [key, value]) => {
        const newPropertyName = `${propertyName}${propertyName ? '.' : ''}${key}`; // добавление ключа к имени свойства
        alert(typeof propertyName);
        return Object.assign(plainObj, value instanceof Object ? plainify(value, newPropertyName) : {[newPropertyName]: value}); // копирование свойств в целевой объект
    }

    return propertyArray.reduce(callbackFunction, {}); // для каждого элемента масссива свойств вызывается функция обратного вызова
    // возвращаемое значение функции предоставляется как арагумент при следующем вызове функции
}
