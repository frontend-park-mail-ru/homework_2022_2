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
 * // returns 'MCMXC'
 * roman('1990')
 * @example
 * // returns 1904
 * roman('MCMIV')
 * @example <caption>You can use lower case representation.</caption>
 * // returns 2017
 * roman('mmxvii')
 */
const roman = (input) => {
    const inputNumber = Number(input);
    if (!(Number.isInteger(input) || (typeof input === 'string' || input instanceof String))) {
        throw TypeError('Incorrect input data. Expected integer or string.');
    }

    return Number.isInteger(inputNumber) ? toRoman(inputNumber) : toArab(input);
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
        throw TypeError('Incorrect input data. Expected integer > 0.');
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
        throw TypeError('Incorrect input data. Expected string of chars: "I", "V", "X", "L", "C", "D", "M" of upper or lower case.');
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


