'use strict';

/**
* Функция `chess`, которая рисует ASCII-шахматрую доску
* @param {number} size - размер шахматной доски
* @returns {string} шахматная доска
* @throws {TypeError} аргумент неверного типа
*/
const chess = size => {
    const numericSize = Number(size);
    if (!Number.isInteger(numericSize)) {
        throw TypeError('argument is not a natural number');
    }
    if (numericSize < 2) {
        return null;
    }

    const evenLine = '\n'.padStart(numericSize + 1, '* ');
    const oddLine = '\n'.padStart(numericSize + 1, ' *');
    const chessLine = evenLine + oddLine;
    return chessLine.repeat(numericSize / 2) + evenLine.repeat(numericSize % 2);
}
