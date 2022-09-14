'use strict';

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


function* generateSequence(end, element) {
  for (let i = 0; i <= end - 1; i++) yield element;
}

function* generateLine (height, row, element) {
  
  yield* generateSequence(height - 1 - row, ' ');

  yield* generateSequence(2 * row - 1, element);

  yield* generateSequence(height - 1 - row, ' ');

  yield "\n";
}

let generateTrunk = (height) => {

  let string = '';
  for (let code of generateLine(height, 1, '|')) {
    string += code; 
  }
  return string;
}

let tree = (n) => {


  const height = Number(n);

  if (height < 3 ) {
    return null;
  }

  if ((isNaN(height)) || (!height) || (!Number.isInteger(height)) || (!isFinite(height))) {
    throw new TypeError('Очень странная высота для ёлочки');
  }

  let string = "";

  for (let row = 1; row < height; row++) {

    for (let code of generateLine(height, row, '*')) {
      string += code;
    }
  }

  string += generateTrunk(height);

  return string;
}
