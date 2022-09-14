'use strict';

function* generateSequence(end, element) {
    for (let i = 0; i < end; i++) yield element;
}

function* generateLine(height, row, element) {
    yield* generateSequence(height - 1 - row, ' ');
    yield* generateSequence(2 * row - 1, element);
    yield* generateSequence(height - 1 - row, ' ');
    
    yield "\n";
}

function* generateTree(height) {
    for(let i = 1; i < height; i++) {
        yield* generateLine(height, i, '*');
    }

    yield* generateLine(height, 1, '|');
}

/**
 * функция рисует ASCII-ёлочку заданной высоты из звёздочек
 * @param {number} height - высота ёлочки
 * @returns {String | null}
 * @example
 * tree(4) return
 * 
 * '  *  \n'
 * ' *** \n'
 * '*****\n'
 * '  |  \n'
 */
const tree = (n) => {
    const height = Number(n);

    if ((isNaN(height)) || (n === null) || (!Number.isInteger(height)) || (!isFinite(height))) {
        throw new TypeError('Очень странная высота для ёлочки');
    }

    if (height < 3 ) {
        return null;
    }

    return [...generateTree(height)].join('');
}
