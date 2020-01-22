export const isValueEmpty = (value) => {
    if (typeof value === 'number' || typeof value === 'boolean') {return false;}

    if (typeof value === 'undefined' || value === null) {return true;}

    if (typeof value.length !== 'undefined') {
        if ((/^[\s]*$/).test(value.toString())) {return true;}
        return value.length === 0;
    }

    let count = 0;

    Object.keys(value).forEach((item) => {
        if (value.hasOwnProperty(item)) {
            count += 1;
        }
    });

    return count === 0;
};
