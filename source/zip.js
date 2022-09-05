'use strict';

const zip = (...objects) => {
    let result = {};

    let getUniqFields = function (res, cur) {
        if (!(cur instanceof Object)) {
            throw new TypeError("Arguments must be objects - custom data types");
        }

        for (let key in cur) {
            if (!res.hasOwnProperty(key)) {
                res[key] = cur[key];
            }
        }

        return res
    }

    result = objects.reduce(getUniqFields)

    return result;
};
