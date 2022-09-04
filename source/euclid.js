'use strict'


/**
* Находит наибольший общий делитель для набора натуральных чисел
*
* @param {array} numbers - массив целых натуральных чисел
* @return {number} наибольший общий делитель
* @throws исключения невалидных аргументов: отсутствие агрументов или неправильные типы
*/
function euclid(...numbers) {
    { // Error cases
        if (numbers.length == 0) {
            throw new SyntaxError("Function <euclid> was called without arguments");
        }

        for (let value of numbers) {
            if ( !Number.isFinite(value) ) {
                throw new SyntaxError("Invalid data were passed to the function <euclid>");
            }
        }

        if (isFinite(numbers.find( num => (num <= 0 || Math.trunc(num) !== num) ))) {
            throw new SyntaxError("Function <euclid> works only with natural numbers");
        }
    }

    if (numbers.length == 1) {
        return numbers[0];
    }

    let result = Infinity;
    let sortedArgs = euclid.copySortedArgs(numbers);

    for (let i = 0; i < sortedArgs.length - 1; ++i) {
        let tmp = euclid.forPair(sortedArgs[i], sortedArgs[sortedArgs.length - 1]);
        result = (tmp < result) ? tmp : result;
    }

    return result;
}


/**
* Находит наибольший общий делитель для двух натуральных чисел
*
* @param {number} greaterNum - большее целое число
* @param {number} smallerNum - меньшее целое число
* @return {number} наибольший общий делитель
*/
euclid.forPair = function euclidForPair(greaterNum = 1, smallerNum = 1) {

    if (greaterNum == 1 || smallerNum == 1) return 1;

    if (smallerNum > greaterNum) return euclidForPair(smallerNum, greaterNum);

    let residual = greaterNum % smallerNum;
    if (residual == 0) return smallerNum;
    else return euclidForPair(smallerNum, residual);
};


/**
* Создаёт копию массива, отсортированного по убыванию
*
* @param {array} arr - исходный массив
* @return {array} result - новый отсортированный массив
*/
euclid.copySortedArgs = arr => [...arr].sort( (a, b) => b - a );
