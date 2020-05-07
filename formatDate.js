const DEFAULT_DATE_LOCALE = 'en-GB';
const DEFAULT_DATE_OPTIONS = { day: 'numeric', month: 'short', year: 'numeric' };

/**
 *  Formats date by locale
 *  @param {string|object } date - ISO date string or Date object
 *  @param {string} locale - formatting locale
 *  @param {object} options - formatting options
 *  @return {string} - formatted string
 *  */

export const formatDate = (date, locale = DEFAULT_DATE_LOCALE, options = DEFAULT_DATE_OPTIONS) => {
    if (!date) return '';

    const dateValue = typeof date.getMonth === 'function' ? date : new Date(date);

    return dateValue.toLocaleDateString(locale, options);
};
