"use strict"

function maxColWidth(numbers, col, colsNumber) {
    let res = 0;
    for (let i = col; i < numbers.length; i += colsNumber) {
        if (res < String(numbers[i]).length) {
            res = String(numbers[i]).length;
        }
    }
    return res;
}

let format = (numbers, cols) => {
    let res = "";
    for (let i = 0; i < numbers.length; i += cols) {
        for (let j = 0; (j < cols) && (i + j < numbers.length); ++j) {
            let colWidth = maxColWidth(numbers, j, cols);
            res += (" ".repeat(colWidth - String(numbers[i + j]).length) + numbers[i + j]);
            (j < cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) ? res += ' ' :
                (j === cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) ? res += '\n' : false
        }
    }
    return res;
}
