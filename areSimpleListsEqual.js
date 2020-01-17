export const areSimpleListsEqual = (list1 = [], list2 = []) => {
    if (list1.length !== list2.length) {
        return false;
    }

    const sortedList1 = list1.sort();
    const sortedList2 = list2.sort();

    return sortedList1.every((value, index) => value === sortedList2[index]);
};
