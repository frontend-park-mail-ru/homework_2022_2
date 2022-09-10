function maxColWidth(numbers, col, colsNumber) {
    let res = 0;
    for (let i = col; i < numbers.length; i += colsNumber) {
        if (res < String(numbers[i]).length) {
            res = String(numbers[i]).length;
        }
    }
    return res;
}

function format(numbers, cols) {
    let res = "";
    for (let i = 0; i < numbers.length; i += cols) {
        for (let j = 0; (j < cols) && (i + j < numbers.length); ++j) {
            let colWidth = maxColWidth(numbers, j, cols);
            let spaces = "";
            let spacesCount = colWidth - String(numbers[i + j]).length;
            for (let k = 0; k < spacesCount; ++k) {
                spaces += " ";
            }
            res += (spaces + numbers[i + j]);
            if (j < cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) {
                res += ' ';
            } else if (j === cols - 1 && numbers[i + j] !== numbers[numbers.length - 1]) {
                res += '\n';
            }
        }

    }
    return res;
}

// вариант, когда все столбцы одной длины (длины самого длинного числа)
// function maxNumLength(numbers) {
//     let res = 0;
//     for (let i = 0; i < numbers.length; ++i) {
//         if (res < String(numbers[i]).length) {
//             res = String(numbers[i]).length;
//         }
//     }
//     return res;
// }
//
// function format(numbers, cols) {
//     let res = "";
//     let maxLength = maxNumLength(numbers);
//
//     for (let i = 0; i < numbers.length; i += cols) {
//         for (let j = 0; j < cols && (i + j < numbers.length); ++j) {
//             let spaces = "";
//             let spacesCount = maxLength - String(numbers[i + j]).length;
//             for (let k = 0; k < spacesCount; ++k) {
//                 spaces += " ";
//             }
//             res += (spaces + numbers[i + j]);
//         }
//         if(i < numbers.length-1){
//             res+='\n';
//         }
//     }
//     return res;
// }