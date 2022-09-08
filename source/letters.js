"use strict";

/**
* Delete all not unique symbols in string if there is no boolean argument
* or delete all repeats if there is one
* @param {string} - string to delete repeats
* @param {bool} - not necessary; if provided define which enter will remain: if 
* true then first one, if false then last one
* @return {string} string without repeats
* @throws {TypeError} throws exception 'first argument must be string', if str
* letters("irritating", true) returns irtang
*/

let letters = (lettersString, bool = null) => {
    if (typeof lettersString != "string") throw new TypeError('first argument must be string');
    if (typeof bool != "boolean" && bool != null) throw new TypeError('second argument must be string or absent');
    if (bool === null){
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

    const start = bool ? 0 : lettersString.length - 1;
    const end = bool ? lettersString.length : -1;
    const step = bool ? 1 : -1;
    
    let set = new Set();
    for (let i = start; i != end; i += step){
        set.add(lettersString[i]);
    }

    let arr = Array.from(set);
    if (!bool) arr = arr.reverse();
    return arr.join('');
}
