"use strict";

/**
* Delete all not unique symbols in string if there is no boolean argument
* or delete all repeats if there is one
* @param {string} lettersString - string to delete repeats
* @param {boolean} [mode] - if provided define which enter will remain: if
* true then first one, if false then last one
* @return {string} string without repeats
* @throws {TypeError} throws exception 'first argument must be string', if str
* letters("irritating", true) returns irtang
*/

let letters = (lettersString, mode = null) => {
    if (typeof lettersString != "string") throw new TypeError('first argument must be string');
    if (typeof mode != "boolean" && mode != null) throw new TypeError('second argument must be string or absent');
    if (mode === null){
        let set = new Set();
        let extraSet = new Set();

        for (let char of lettersString){
            if (set.has(char)) extraSet.add(char);
            else set.add(char);
        }
        for (let item of extraSet){
            set.delete(item);
        }

        return Array.from(set).join('');
    }
    //if mode is true put string in set in direct order if false put in reverse order
    const set = mode ? new Set(lettersString) : new Set(lettersString.split('').reverse().join(''));

    return (mode ? Array.from(set) : Array.from(set).reverse()).join('')
}
