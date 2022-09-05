'use strict';

const zip = (...objects) => {
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

    return objects.reduce(getUniqFields);
};
