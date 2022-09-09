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

function tree(height) {

    if (height < 3 || height % 1 != 0 || height == Infinity) {
        return null;
    }

    let result = "";

    for (var i = 0; i < height - 1; i++) {
      let stars = '*'.repeat(2 * i + 1);
      let spaces = ' '.repeat(height - 1 - i - 1);
      result += spaces + stars + spaces + "\n";
    }

    result += ' '.repeat(height - 2) + "|" + ' '.repeat(height - 2) + "\n";

    return result;
  }