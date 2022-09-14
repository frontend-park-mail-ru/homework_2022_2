'use strict';

const ARAB_MAPPING = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const ROMAN_MAPPING = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Roman to Arabic and vice versa.
 *
 * @param {string|number} input - string of roman or number of arabic.
 * @returns {string|number} string - in roman representation, number - in arabic representation.
 * @throws {TypeError} - if incorrect input.
 *
 * @example
 *
 *  let romanResult = roman('1990');
 *  let arabicResult = roman('MCMIV');
 *  let arabicResult2 = roman('mmxvii'); // You can use lower case representation
 */
const roman = (input) => {
    try {
        if (Number.isInteger(Number(input)) && !input.toString().startsWith('0')) {
            return toRoman(Number(input));
        } else {
            return toArab(input);
        }
    } catch (e) {
        throw e;
    }
}

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Arabic to Roman.
 *
 * @param {number} arab - in arabic representation.
 * @returns {string} string - in roman representation.
 * @throws {TypeError} - if incorrect input.
 */
const toRoman = (arab) => {
    if (!Number.isInteger(arab) || arab <= 0) {
        throw TypeError('Incorrect input data.');
    }
    let result = "";
    let n = ARAB_MAPPING.length - 1;
    while (arab > 0) {
        if (arab >= ARAB_MAPPING[n]) {
            result += ROMAN_MAPPING[n];
            arab -= ARAB_MAPPING[n];
        } else {
            --n;
        }
    }

    return result;
}

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Roman to Arabic.
 *
 * @param {string} roman - in roman representation.
 * @returns {number} number - in arabic representation.
 * @throws {TypeError} - if incorrect input.
 */
const toArab = (roman) => {
    const romanPattern = /^[IVXLCDM]+$/i;
    if (!romanPattern.test(roman)) {
        throw TypeError('Incorrect input data.');
    }
    const text = roman.toUpperCase();
    let result = 0;
    let textStartPos = 0;
    let n = ARAB_MAPPING.length - 1;
    while (n >= 0 && textStartPos < text.length) {
        if (text.substring(textStartPos, textStartPos + ROMAN_MAPPING[n].length) === ROMAN_MAPPING[n]) {
            result += ARAB_MAPPING[n];
            textStartPos += ROMAN_MAPPING[n].length;
        } else {
            --n;
        }
    }

    return result;
}

