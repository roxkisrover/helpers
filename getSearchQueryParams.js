export const getSearchQueryParams = (search) => {
    const cleanQuery = (/^[?#]/).test(search) ? search.substring(1) : search;

    if (typeof cleanQuery !== 'string' || cleanQuery.length === 0) {
        return {};
    }

    const paramsList = cleanQuery.split('&');
    const params = paramsList.reduce((acc, currentQuery) => {
        const [queryKey, queryValue] = currentQuery.split('=');

        if (typeof queryKey !== 'undefined') {
            const cleanValue = queryValue && queryValue.charAt(queryValue.length - 1) === '/'
                ? queryValue.slice(0, -1)
                : queryValue;

            acc[queryKey] = cleanValue ? decodeURIComponent(cleanValue.replace(/\+/g, ' ')) : true;
        }

        return acc;
    }, {});

    return params;
};
