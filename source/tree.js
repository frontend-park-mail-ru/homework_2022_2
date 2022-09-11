"use strict";

/**
 * функция рисует ASCII-ёлочку заданной высоты из звёздочек
 * @param {number} height - высота ёлочки
 * @returns {String} | {null}
 * @example
 * tree(4) return
 *    '  *  \n'
			' *** \n'
			'*****\n'
			'  |  \n'
 */



function* generateSequence(start, end, element) {
  for (let i = start; i <= end; i++) yield element;
}

function* generateTree (height, row) {
  
  // printing spaces
  yield* generateSequence(1, height - 1 - row, " ");

  //printing stars
  yield* generateSequence(1, 2 * row - 1, "*");

  //printing spaces
  yield* generateSequence(1, height - 1 - row, " ");

  yield "\n";
  
}

function tree (height) {
  let string = "";

  for (let row = 1; row <= height - 1; row++) {

    for(let code of generateTree(height, row)) {
      string += code;
    }
  }
  return string;
}



// function tree (height) {
//   if (height < 3 || height % 1 != 0 || height == Infinity) {
//     return null;
//   }
//   let string = "";
//   // External loop
//   for (let i = 1; i <= height - 1; i++) {
//     // printing spaces
//     for (let j = 1; j <= height - 1 - i; j++) {
//       string += " ";
//     }
//     // printing star
//     for (let k = 0; k < 2 * i - 1; k++) {
//       string += "*";
//     }

//     // printing spaces second time
//     for (let j = 1; j <= height - 1 - i; j++) {
//       string += " ";
//     }
//     string += "\n";
//   }

//   string += ' '.repeat(height - 2) + "|" + ' '.repeat(height - 2) + "\n";

//   return string;
// }
