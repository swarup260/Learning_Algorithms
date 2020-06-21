const {
    Compare,
    defaultCompare
} = require('../../utils/function');

/**
 * Sort the Element in a given array
 * complexity of Merge Sort is O(n*long n)
 * @param {array} array 
 * @param {Function} compareFunc 
 * @returns array
 */
const MergeSort = (array, compareFunc = defaultCompare) => {
    if (array.length > 1) {
        const {
            length
        } = array;
        const middle = Math.floor(length / 2);
        const left = MergeSort(array.slice(0, middle), compareFunc);
        const right = MergeSort(array.slice(middle, length), compareFunc);
        array = merge(left, right, compareFunc);

    }
    return array;
}

/**
 *  Merge Two Array
 * @param {Array} left 
 * @param {Array} right 
 * @param {Function} compareFunc 
 */
const merge = (left, right, compareFunc) => {
    let i = 0,
        j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compareFunc(left[i], right[j]) == Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

// console.time('MergeSort');
// console.log(MergeSort([5, 3, 10, 1, 2, 0, -1, 7]));
// console.timeEnd('MergeSort');
module.exports = {
    MergeSort
}