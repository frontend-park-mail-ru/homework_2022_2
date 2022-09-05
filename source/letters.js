'use strict';

/**
 * Проверка, состоит ли строка из одного повторяющегося символа
 * @param {string} str - строка
 * @returns {boolean}
 */
const isStrConsistsOfOneChar = (str) => {
    let temp = str[0]

    for (let i in str) {
        if (i != 0 && str[i] !== temp) return false;
    }

    return true;
}

/**
 * Проверка, встретится ли символ на месте valueIndex еще раз в строке
 * @param {number} valueIndex 
 * @param {string} str 
 * @returns {boolean} 
 */
const isNextValueInStr = (valueIndex, str) => {
    if (str.lastIndexOf(str[valueIndex]) != valueIndex) {
        return true;
    }

    return false;
}

/**
 * Удалит все повторяющиеся символы кроме первого
 * @param {string} str 
 * @returns {string}
 */
const saveFirstLetters = (str) => {
    let res = []

    for (let i in str) {
        if (!isNextValueInStr(i, str) && !res.includes(str[i])) {
            res.push(str[i])
        } else if (isNextValueInStr(i, str) && !res.includes(str[i])) {
            res.push(str[i])
        }
    }

    return res.join('')
}

/**
 * Удалит все повторяющиеся символы кроме последнего
 * @param {string} str 
 * @returns {string}
 */
const saveLastLetters = (str) => {
    let res = []

    for (let i in str) {
        if (!isNextValueInStr(i, str)) {
            res.push(str[i])
        }
    }

    console.log(str, res)

    return res.join('')
}

/**
 * Удалит все повторяющиеся символы
 * @param {string} str - исходная строка
 * @returns {string}
 */
const deleteAllRepeatedSymbols = (str) => {
    let res = []

    for (let i in str) {
        if (str.lastIndexOf(str[i]) == i && str.indexOf(str[i]) == i) {
            res.push(str[i])
        }
    }

    return res.join('')
}

/**
 * 
 * @param {string} str - Исходная строка 
 * @param {boolean} flag
 * @returns {string} - Результат операции удаления повторяющихся символов
 */
const letters = (str, flag) => { 
    if (typeof str !== "string") throw new Error("Некорректный тип данных")

    if (str === '' || isStrConsistsOfOneChar(str.split(''))) return ''

    if (flag === undefined) {
        return deleteAllRepeatedSymbols(str.split(''))
    }

    if (flag) {
        return saveFirstLetters(str.split(''))
    }

    return saveLastLetters(str.split(''));
}
