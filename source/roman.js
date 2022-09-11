'use strict';

/**
 * {roman number: arabic number}
 * @type {Object}
 */
const romanToArabicDic = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

/**
 * {arabic number: roman number}
 * @type {Object}
 * const arabicToRomanDic = {
 *         1: 'I',
 *         5: 'V',
 *         10: 'X',
 *         50: 'L',
 *         100: 'C',
 *         500: 'D',
 *         1000: 'M',
 * }
 */
const arabicToRomanDic = Object.fromEntries(Object.entries(romanToArabicDic).map(dic => dic.reverse()));

/**
 * roman numbers in arabic numerics
 * @type {Array}
 * const romanNums = [1000, 500, 100, 50, 10, 5, 1];
 */
const romanNums = Object.keys(arabicToRomanDic).reverse();

/**
 * roman symbols repeated 4 times for usage in .replace()
 * @type {Array}
 */
const roman4Symbols = ['MMMM', 'DDDD', 'CCCC', 'LLLL', 'XXXX', 'VVVV', 'IIII'];

/**
 * converts arabic number to roman
 * @param {number} arabicN arabic number to convert
 * @returns {string} roman number
 */
const translateArabicToRoman = (arabicN) => {
    /**
     * resulting roman number
     * @type {string}
     */
    let romanN = romanNums.reduce(([rNum, aNum], currNum) => {
        while (aNum - currNum >= 0) {
            aNum -= currNum;
            rNum += arabicToRomanDic[currNum];
        }
        return [rNum, aNum];
    }, ['', arabicN])[0];

    let temp4Symbols = roman4Symbols.slice(2);
    temp4Symbols.forEach((currSymbol, i) => {
        romanN = romanN.replace(roman4Symbols[i + 1][0] + currSymbol,
            currSymbol[0] + roman4Symbols[i][0])
        romanN = romanN.replace(currSymbol, currSymbol[0] + roman4Symbols[i + 1][0])
    });

    return romanN;
}

/**
 * converts roman number to arabic
 * @param {string} romanN roman number to convert
 * @returns {number} arabic number
 */
const translateRomanToArabic = (romanN) => {
    let romanNum = romanN.toUpperCase().split('');

    return romanNum.reduce((sum, currNumber, i, romanArr) => {
        if (romanToArabicDic[currNumber] >= romanToArabicDic[romanArr[i + 1] ? romanArr[i + 1] : currNumber])
            return sum + romanToArabicDic[currNumber];
        else
            return sum - romanToArabicDic[currNumber];
    }, 0);
}

/**
 * arabic number validation
 * @param {string} inputSymbols symbols for check
 * @returns {boolean} whether +inputSymbols is integer
 */
const isArabic = (inputSymbols) => Number.isInteger(Number(inputSymbols ?? NaN));

/**
 * roman number validation
 * @param {string} inputSymbols symbols for check
 * @returns {boolean} whether inputSymbols is roman number
 */
const isRoman = (inputSymbols) => {
    if (typeof inputSymbols === 'string' || inputSymbols instanceof String) {
        /**
         * to exclude any non-roman numeric symbols
         * @type {RegExp}
         */
        const romanChars = /^[MDCLXVI]*$/;
        return romanChars.test(inputSymbols.toUpperCase());
    } else
        return false;
}

/**
 * converts number to different numerics (roman <-> arabic)
 * @param {string} inputSymbols symbols to convert
 * @returns {string | number} converted roman | arabic number
 */
const roman = (inputSymbols) => {
    if (isArabic(inputSymbols) && (+inputSymbols >= 1 && +inputSymbols <= 3999))
        return translateArabicToRoman(+inputSymbols);

    if (isRoman(inputSymbols))
        return translateRomanToArabic(inputSymbols);

    throw new TypeError('Error, wrong input format');
}
