'use strict';

const ARAB_MAPPING = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const ROMAN_MAPPING = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Roman to Arabic and vice versa.
 *
 * @param {string|number} input - string of roman or number of arabic.
 * @returns {string|number|undefined} string - in roman representation, number - in arabic representation, undefined - if incorrect input.
 *
 * @example
 *
 *  let romanResult = roman('1990');
 *  let arabicResult = roman('MCMIV');
 *  let arabicResult2 = roman('mmxvii'); // You can use lower case representation
 */
const roman = (input) => {
    const arabicPatter = /^[0-9]+$/;
    if (arabicPatter.test(input) && !input.toString().startsWith('0')) {
        return toRoman(input)
    } else {
        return toArab(input)
    }
}

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Arabic to Roman.
 *
 * @param {number} arab - in arabic representation.
 * @returns {string|undefined} string - in roman representation, undefined - if incorrect input.
 */
const toRoman = (arab) => {
    const arabicPatter = /^[0-9]+$/;
    if (!arabicPatter.test(String(arab)) || arab === 0) {
        return undefined;
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
 * @returns {number|undefined} number - in arabic representation, undefined - if incorrect input.
 */
const toArab = (roman) => {
    const romanPattern = /^[IVXLCDM]+$/i;
    if (!romanPattern.test(roman)) {
        return undefined;
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

