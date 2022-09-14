'use strict';

/**
 * Quick sort implementation.
 * @param {array} arr - Array to sort.
 * @param {function} compare - Comparator to use.
 * @return {array} Sorted array.
 */
const quickSort = (arr, compare = (left, right) => left > right) => {
    if (arr.length < 2)
        return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    arr.slice(1).forEach((elem) => {
        if (compare(pivot, elem) > 0) {
            left.push(elem);
        } else {
            right.push(elem);
        }
    });

    return quickSort(left, compare).concat(pivot, quickSort(right, compare));
}

/**
 * Sort words in sentence and letters in words with first one in uppercase.
 * @param {string} str - String to sort.
 * @return {string} Sorted string.
 * @throws {TypeError} Argument is not a string.
 */
const sort = (str) => {
    if (typeof str !== 'string') {
        throw TypeError(`${typeof str}` + ' is not a string.');
    }

    const collator = new Intl.Collator();
    const words = quickSort(str.toLowerCase().split(' ')).map((word) => {
        const sortedWord = quickSort(word.split(''), collator.compare).join('');
        return sortedWord[0].toUpperCase() + sortedWord.slice(1);
    });

    return quickSort(words, collator.compare).join(' ');
}
