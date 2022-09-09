'use strict';

const ARAB_MAPPING = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const ROMAN_MAPPING = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Roman to Arabic and vice versa.
 *
 * @param {input} input - string of roman or number of arabic.
 * @returns {string|number|undefined} string - in roman representation, number - in arabic representation, undefined - if incorrect input.
 */
const roman = input => {
    let result;
    if (typeof input == 'string') {
        if (/^[0-9]+$/.test(input) && !input.toString().startsWith('0')) {
            result = to_roman(input);
        } else if (/^[IVXLCDM]+$/i.test(input)) {
            result = to_arab(input);
        }
    } else if (typeof input == 'number' && input !== 0) {
        if (/^[0-9]+$/.test(input.toString())) {
            result = to_roman(input);
        }
    }

    return result; // If Incorrect input returns 'undefined'
}

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Arabic to Roman.
 *
 * @param {number} arab - in arabic representation.
 * @returns {string} string - in roman representation.
 */
const to_roman = arab => {
    if (!arab) {
        return "";
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
    //console.log(result);
    return result;
}

/**
 * @author {@link https://github.com/VarenytsiaMykhailo}
 *
 * Converts a number from Roman to Arabic.
 *
 * @param {string} roman - in roman representation.
 * @returns {number} number - in arabic representation.
 */
const to_arab = roman => {
    let text = roman.toUpperCase();
    let result = 0;
    let textStartPos = 0;
    let n = ARAB_MAPPING.length - 1;
    while (n >= 0 && textStartPos < text.length) {
        if (text.substr(textStartPos, ROMAN_MAPPING[n].length) === ROMAN_MAPPING[n]) {
            result += ARAB_MAPPING[n];
            textStartPos += ROMAN_MAPPING[n].length;
        } else {
            --n;
        }
    }
    //console.log(result);
    return result;
}
