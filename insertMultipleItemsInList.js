export const insertMultipleItemsInList = (list, index, newItems = []) => [
    ...list.slice(0, index),
    ...newItems,
    ...list.slice(index),
];
