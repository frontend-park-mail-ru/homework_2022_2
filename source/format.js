"use strict"

function colsWidthArr(numbers, colsCount) {
    let res = [];
    for (let i = 0; i < colsCount; ++i) {
        let tempCol = [];
        for (let j = i; j < numbers.length; j += colsCount) {
            tempCol.push(numbers[j]);
        }
        res[i] = Math.max(...(tempCol.map(el => String(el).length)));
    }
    return res;
}

let format = (numbers, cols) => {
    let res = "";
    let widths = colsWidthArr(numbers, cols);
    for (let i = 0; i < numbers.length; i += cols) {
        for (let j = 0; (j < cols) && (i + j < numbers.length); ++j) {
            res += (" ".repeat(widths[j] - String(numbers[i + j]).length) + numbers[i + j]);
            (j < cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) ? res += ' ' :
                (j === cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) ? res += '\n' : false
        }
    }
    return res;
}