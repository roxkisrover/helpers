export const formatNumber = ({
    value,
    precision = 2,
    cleanTrailingZeros = true,
    prefix = '',
    postfix = '',
}) => {
    if (value === null || value === '' || typeof value === 'undefined') {
        return `${prefix}???${postfix}`.trim();
    }

    const roundedNumber = Number(value).toFixed(precision);
    const cleanNumber = cleanTrailingZeros ? parseFloat(roundedNumber) : roundedNumber;
    const formattedNumber = String(cleanNumber).replace(REGEXP.monetarySeparation, ',');

    return `${prefix}${formattedNumber}${postfix}`.trim();
};
