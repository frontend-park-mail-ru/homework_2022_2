'use strict';

/**
* Функция `chess`, которая рисует ASCII-шахматрую доску
* @param {number} size - размер шахматной доски
* @returns {string} шахматная доска
* @throws {TypeError} аргумент неверного типа
*/
const chess = size => {
    let n = Number(size);
    if (!Number.isInteger(n)) {
        throw TypeError('argument is not a natural number');
    }
    if (size < 2) {
        return null;
    }

    let chessBoard = '';
    let evenLine = ''.padStart(n, '* ') + '\n';
    let oddLine = ''.padStart(n, ' *') + '\n';
    for (let i = 0; i < n; i++) {
        chessBoard += i % 2 == 0 ? evenLine : oddLine;
    }

    return chessBoard;
}
