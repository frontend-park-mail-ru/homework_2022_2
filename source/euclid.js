/**
* Находит наибольший общий делитель для набора натуральных чисел
*
* @param {number []} numbers - массив целых натуральных чисел
* @return {number} наибольший общий делитель
* @throws {Error} в случае вызова функции без аргументов
* @throws {TypeError} в случае использования неверных типов аргументов
* @example
* euclid(30, 6, 18) returns 6
*/
const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw new Error('Function <euclid> was called without arguments');
    }

    numbers.forEach((value) => {
        if (!Number.isFinite(value)) {
            throw new TypeError('Invalid data were passed to the function <euclid>');
        }
    });

    if (Number.isFinite(numbers.find((num) => (num <= 0 || Math.trunc(num) !== num)))) {
        throw new TypeError('Function <euclid> works only with natural numbers');
    }

    if (numbers.length === 1) {
        return numbers[0];
    }

    const sortedArgs = [...numbers].sort((a, b) => b - a);
    const minNumber = sortedArgs.pop();

    return sortedArgs.reduce((result, value) => {
        const tmp = euclidForPair(value, minNumber);
        return (tmp < result) ? tmp : result;
    }, Infinity);
}

/**
* Находит наибольший общий делитель для двух натуральных чисел
*
* @param {number} greaterNum - большее целое число
* @param {number} smallerNum - меньшее целое число
* @return {number} наибольший общий делитель
* @example
* euclid(30, 18) returns 6
*/
const euclidForPair = (greaterNum = 1, smallerNum = 1) => {
    if (greaterNum === 1 || smallerNum === 1) {
        return 1;
    }

    if (smallerNum > greaterNum) {
        [smallerNum, greaterNum] = [greaterNum, smallerNum];
    }

    let residual = greaterNum % smallerNum;
    let tmp = smallerNum;

    while (residual !== 0) {
        smallerNum = residual;
        residual = tmp % smallerNum;
        tmp = smallerNum;
    }

    return smallerNum;
}
