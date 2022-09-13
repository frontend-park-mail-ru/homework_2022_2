'use strict';

/**
 * Quick sort implementation.
 * @param {Array} arr - Array to sort.
 * @param {Function} compare - Comparator to use.
 * @return {Array} Sorted array.
 */
const quickSort = (arr, compare = (left, right) => { return left > right }) => {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (compare(pivot, arr[i]) > 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left, compare).concat(pivot, quickSort(right, compare));
}

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

    const collator = new Intl.Collator();
    const words = quickSort(str.toLowerCase().split(' ')).map((word) => {
        let sortedWord = quickSort(word.split(''), collator.compare).join('');
        return sortedWord[0].toUpperCase() + sortedWord.slice(1);
    });

    return quickSort(words, collator.compare).join(' ');
}
