'use strict';

/**
* Функция `chess`, которая рисует ASCII-шахматрую доску
* @param {number} size - размер шахматной доски
* @returns {string} шахматная доска
* @throws {TypeError} аргумент неверного типа
*/
const chess = size => {
    size = Number( size );
    if ( !Number.isInteger( size ) ) {
        throw TypeError('argument is not a natural number');
    }
    if ( size < 2 ) {
        return null;
    }


    let chessBoard = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            chessBoard += (i + j) % 2 == 0? '*' : ' ';
        }
        chessBoard += '\n';
    }
    return chessBoard;
}