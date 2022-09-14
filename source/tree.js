"use strict";

/**
 * функция рисует ASCII-ёлочку заданной высоты из звёздочек
 * @param {number} height - высота ёлочки
 * @returns {String | null}
 * @example
 * tree(4) return
 * 
   '  *  \n'
	 ' *** \n'
	 '*****\n'
	 '  |  \n'
 */


function* generateSequence(start, end, element) {
  for (let i = start; i <= end; i++) yield element;
}

function* generateTree (height, row, element_1, element_2) {
  
  // printing spaces
  yield* generateSequence(1, height - 1 - row, element_1);

  //printing stars
  yield* generateSequence(1, 2 * row - 1, element_2);

  //printing spaces
  yield* generateSequence(1, height - 1 - row, element_1);

  yield "\n";
  
}

function tree (n) {


  const height = Number(n);

  if (height < 3 ) {
    return null;
  }

  if (!Number(height)) {
    throw new TypeError('Высота ёлочки может быть только числовым значением')
  }

  if (!isFinite(height)) {
    throw new TypeError('Высота ёлочки не может равняться бесконечности')
  }

  if (!Number.isInteger(height)) {
    throw new TypeError('Высота ёлочки должна быть целым числом')
  }




  let string = "";

  for (let row = 1; row <= height; row++) {

    if (row == height) {
      for (let code of generateTree(height, 1, ' ', '|')) {
        string += code;
      }
      break;
    }

    for (let code of generateTree(height, row, ' ', '*')) {
      string += code;
    }
  }

  return string;
}
