const getCommonItems = (array1, array2) => array1.reduce((accumulator, item) => {
    if (array2.includes(item)) {
        return [...accumulator, item];
    }
    return accumulator;
}, []);

export default getCommonItems;
