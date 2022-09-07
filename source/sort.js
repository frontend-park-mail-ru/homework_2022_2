'use strict';

/**
 * Sort words in sentence and letters in words with first one in uppercase.
 * @param {string} str - String to sort.
 * @return {string} Sorted string.
 */
const sort = (str) => {
    let collator = new Intl.Collator()
    let words = str.toLowerCase().split(' ');
    words.forEach((word, index) => {
            word = word.split('').sort(collator.compare).join('');
            words[index] = word.replace(/^./, word[0].toUpperCase());
        }
    )
    return words.sort(collator.compare).join(' ')
}
