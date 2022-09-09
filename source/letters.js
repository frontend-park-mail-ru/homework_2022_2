'use strict';

/**
* Delete all not unique symbols in string if there is no boolean argument
* or delete all repeats if there is one
*
* @param {string} lettersString - string to delete repeats
* @param {boolean} [mode] - if provided define which enter will remain: if
* true then first one, if false then last one
* @return {string} string without repeats
* @throws {TypeError} throws exception 'first argument must be string', if lettersString is invalid
* @throws {TypeError} throws exception 'second argument must be string or absent', if provided mode is invalid
* letters("irritating", true) returns irtang
*/
const letters = (lettersString, mode = null) => {
    if (!(typeof lettersString === 'string' || lettersString instanceof String)) {
        throw new TypeError('first argument must be string');
    };

    if (typeof mode !== 'boolean' && mode !== null) {
        throw new TypeError('second argument must be string or absent');
    };

    if (mode === null){
        const set = new Set();
        const extraSet = new Set();

        for (let char of lettersString){
            if (set.has(char)) extraSet.add(char);
            else set.add(char);
        }

        for (let item of extraSet){
            set.delete(item);
        }

        return [...set].join('');
    }
    //if mode is true put string in set in direct order if false put in reverse order
    const set = new Set(mode ? lettersString : [...lettersString].reverse());

    return (mode ? [...set] : [...set].reverse()).join('');
}
