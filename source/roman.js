'use strict';

 /**
  * Class to create numerals convertor (roman <-> arabic)
  * */
function NumeralsTranslator() {
    /**
     * {roman number: arabic number}
     * @type {Object}
     * */
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
     * */
    const arabicToRomanDic = Object.fromEntries(Object.entries(romanToArabicDic).map(dic => dic.reverse()))

    /**
     * roman numbers in arabic numerics
     * @type {Array}
     * const romanNums = [1000, 500, 100, 50, 10, 5, 1];
     * */
    const romanNums = Object.keys(arabicToRomanDic).reverse();
    /**
     * roman symbols repeated 4 times for usage in .replace()
     * @type {Array}
     * */
    const roman4Symbols = ['MMMM', 'DDDD', 'CCCC', 'LLLL', 'XXXX', 'VVVV', 'IIII'];

    /**
     * converts arabic number to roman
     * @param {number} arabicN arabic number to convert
     * @returns {string} roman number
     * */
    this.translateArabicToRoman = function (arabicN) {
        /**
         * resulting roman number
         * @type {string}
         * */
        let romanN = '';

        for (let i = 0; arabicN !== 0; ++i)
            if (arabicN - romanNums[i] >= 0) {
                arabicN -= romanNums[i];
                romanN += arabicToRomanDic[romanNums[i]];
                --i;
            }

        for (let i = 2; i < roman4Symbols.length; i++) {
            romanN = romanN.replace(roman4Symbols[i - 1][0] + roman4Symbols[i], roman4Symbols[i][0] + roman4Symbols[i - 2][0])
            romanN = romanN.replace(roman4Symbols[i], roman4Symbols[i][0] + roman4Symbols[i - 1][0])
        }

        return romanN;
    }

    /**
     * converts roman number to arabic
     * @param {string} romanN roman number to convert
     * @returns {number} arabic number
     * */
    this.translateRomanToArabic = function (romanN) {
        romanN = romanN.toUpperCase().split('');

        /**
         * resulting arabic number
         * @type {number}
         * */
        let arabicN = 0;

        for (let i = 0; i < romanN.length - 1; i++) {
            if (romanToArabicDic[romanN[i]] >= romanToArabicDic[romanN[i + 1]]) {
                arabicN += romanToArabicDic[romanN[i]];
            } else
                arabicN -= romanToArabicDic[romanN[i]];
        }

        arabicN += romanToArabicDic[romanN[romanN.length - 1]];
        return arabicN;
    }
}

/**
 * arabic number validation
 * @param {string} inputSymbols symbols for check
 * @returns {boolean} whether +inputSymbols is integer
 * */
let isArabic = (inputSymbols) => Number.isInteger(+inputSymbols);

/**
 * roman number validation
 * @param {string} inputSymbols symbols for check
 * @returns {boolean} whether inputSymbols is roman number
 * */
let isRoman = function (inputSymbols) {
    if (typeof inputSymbols !== 'string')
        return false;

    /**
     * to exclude any non-roman numeric symbols
     * @type {RegExp}
     * */
    const romanChars = /^[MDCLXVI]*$/;
    return romanChars.test(inputSymbols.toUpperCase());
}

/**
 * converts number to different numerics (roman <-> arabic)
 * @param {string} inputSymbols symbols to convert
 * @returns {string | number} converted roman | arabic number
 * */
let roman = function (inputSymbols) {
    /**
     * See {@link NumeralsTranslator}
     * */
    let translator = new NumeralsTranslator;

    if (isArabic(inputSymbols))
        return (inputSymbols >= 1 && inputSymbols <= 3999) ?
            translator.translateArabicToRoman(+inputSymbols) : NaN;

    if (isRoman(inputSymbols))
        return translator.translateRomanToArabic(inputSymbols);

    console.log("Error, wrong input format // roman()");
    return (NaN);
}
