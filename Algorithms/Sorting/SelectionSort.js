const {
    Compare,
    defaultCompare,
    swap
} = require('../../utils/function');

/**
 * 
 * @param {Array} array 
 * @param {Function} compareFun 
 */
const SelectionSort = (array, compareFun = defaultCompare) => {
    const {
        length
    } = array;

    let minIndex;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i; j < length; j++) {
            if (compareFun(array[minIndex], array[j]) == Compare.BIGGER_THAN) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(array, i, minIndex);
        }

    }


    return array;

}

module.exports = {
    SelectionSort
}