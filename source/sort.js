'use strict';

/**
 * Sort words in sentence and letters in words with first one in uppercase.
 * @param {string} str - String to sort.
 * @return {string} Sorted string.
 * @throws {TypeError} Argument is not a string.
 */
const sort = (str) => {
    if (typeof str != 'string') {
        throw TypeError(`${typeof str}` + ' is not a string.');
    }

    const collator = new Intl.Collator()
    const words = str.toLowerCase().split(' ');
    words.forEach((word, index) => {
            word = word.split('').sort(collator.compare).join('');
            words[index] = word.replace(/^./, word[0].toUpperCase());
        }
    )
    return words.sort(collator.compare).join(' ')
}
