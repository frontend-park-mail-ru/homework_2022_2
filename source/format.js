"use strict"

let format = (numbers, cols) => {
    let res = "";
    let maxWidth = Math.max(...(numbers.map(el => String(el).length)));
    for (let i = 0; i < numbers.length; i += cols) {
        for (let j = 0; (j < cols) && (i + j < numbers.length); ++j) {
            res += (" ".repeat(maxWidth - String(numbers[i + j]).length) + numbers[i + j]);
            (j < cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) ? res += ' ' :
                (j === cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) ? res += '\n' : false
        }
    }
    return res;
}