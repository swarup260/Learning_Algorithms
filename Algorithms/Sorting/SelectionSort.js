const {
    Compare,
    defaultCompare,
    swap
} = require('../../utils/function');

/**
 * Sort the Element in a given array
 * complexity of Selection Sort is O(n^2)
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
// console.time('SelectionSort')
// console.log(SelectionSort([5, 3, 10 ,1, 0, -1,7]));
// console.timeEnd('SelectionSort')

module.exports = {
    SelectionSort
}