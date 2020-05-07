export const addLeadingZeros = (num, size = 2) => {
    let result = `${num}`;

    while (result.length < size) {
        result = `0${result}`;
    }

    return result;
};
