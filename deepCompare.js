export const deepCompare = (item1, item2) => {
    if (!!item1 && typeof item1 === 'object' && !!item2 && typeof item2 == 'object') {
        return Object.keys(item1).length === Object.keys(item2).length 
            && Object.keys(item1).every(key => deepCompare(item1[key], item2[key]));  
    }
  
    return item1 === item2;
};
