'use strict';

const plainify = (nested, propertyName = '') => {
    const propertyArray = Object.entries(nested); //получаем массив свойств объекта

    // функция обратного вызова
    const callbackFunction = (plainObj, [key, value]) => {
        const newPropertyName = `${propertyName}${propertyName ? '.' : ''}${key}`; // добавление ключа к имени свойства
        return Object.assign(plainObj, value instanceof Object ? plainify(value, newPropertyName) : {[newPropertyName]: value}); // копирование свойств в целевой объект
    }

    return propertyArray.reduce(callbackFunction, {}); // для каждого элемента масссива свойств вызывается функция обратного вызова
    // возвращаемое значение функции предоставляется как рагумент при следующем вызове функции
}
