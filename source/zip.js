'use strict';

function zip() {
    let result = {};

    for (let i = 0, length = arguments.length; i < length; i++) {
        for (let key in arguments[i]) {

            if (!result.hasOwnProperty(key)) {
                result[key] = arguments[i][key]
            }
        }
    }

    return result
};
