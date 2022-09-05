'use strict'

const minmax = (string) => {
    const regularExpression = /(-?(\d+)?\.?\d+e?-?(\d+)?)|(-?Infinity)/g;
    const numbers = string.match(regularExpression);
    if (numbers === null) {
        return [ undefined, undefined ];
    }
    const arrayOfNumbers = numbers.map(v => +v);
    return( [Math.min(...arrayOfNumbers), Math.max(...arrayOfNumbers)]);
};
