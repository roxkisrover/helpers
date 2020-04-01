/**
 *  Склоняет русское слово в зависимости от числа
 *  @param {number} value - число по которому склонять
 *  @param {array} wordForms - массив для склонения ['балл', 'балла', 'баллов']
 *  @return {string} - число и склоненное слово
 *  */

export const getRusWordFormByCount = (value, wordForms = []) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const wordFormIndex = value % 100 > 4 && value % 100 < 20
        ? 2
        : cases[value % 10 < 5 ? value % 10 : 5];

    return `${value} ${wordForms[wordFormIndex]}`;
};

/**
 *  Adds correct english word form to the number
 *  @param {number} value - value to add word form to
 *  @param {array} wordForms - array of word forms ['item', 'items']
 *  @return {string} - value whit correct word form
 *  */

export const getEngWordFormByCount = (value, wordForms = []) => {
    if (value === 1) {
        return `${value} ${wordForms[0]}`;
    }

    return `${value} ${wordForms[1]}`;
};
