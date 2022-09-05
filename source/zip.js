'use strict';

const zip = (...objects) => {
    let result = {};

    for (let i = 0, length = objects.length; i < length; ++i) {
        for (let key in objects[i]) {
            if (!result.hasOwnProperty(key)) {
                result[key] = objects[i][key];
            }
        }
    }

    return result;
};
