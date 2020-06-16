const { Compare, defaultCompare } = require('../../utils/function');

/**
 * Sort the Element in a given array
 * complexity of Insertion Sort is O(n^2)
 * @param {array} array 
 * @param {Function} compareFunc 
 * @returns array
 */
const InsertionSort = (array, compareFunc = defaultCompare) => {
    const { length } = array;
    let i, j, temp;
    for (let i = 1; i < length; i++) {
        j = i;
        temp = array[j];
        while (j > 0 && compareFunc(array[j - 1], temp) == Compare.BIGGER_THAN) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}

// console.time('InsertionSort')
// console.log(InsertionSort([5, 3, 10 ,1, 0, -1,7]));
// console.timeEnd('InsertionSort')
module.exports = {
    InsertionSort
}
