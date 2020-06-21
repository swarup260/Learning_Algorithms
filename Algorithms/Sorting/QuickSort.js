const {
    Compare,
    defaultCompare,
    swap
} = require('../../utils/function');

/**
 * Sort the Element in a given array
 * complexity of Quick Sort is O(n*long n)
 * @param {array} array 
 * @param {Function} compareFunc 
 * @returns array
 */
const QuickSort = (array, compareFunc = defaultCompare) => {
    return quick(array, 0, array.length - 1, compareFunc);
}


const quick = (array, left, right, compareFunc) => {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, compareFunc);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFunc);
        }
        if (index < right) {
            quick(array, index, right, compareFunc);
        }
    }
    return array;
}

const partition = (array, left, right, compareFunc) => {
    const pivot = array[Math.floor((left + right) / 2)];
    let i = left , j =right ;
    while (i <= j) {
        while (compareFunc(array[i], pivot) == Compare.LESS_THAN) {
            i++;
        }
        while (compareFunc(array[j], pivot) == Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}


// console.time('QuickSort');
// console.log(QuickSort([5, 3, 10, 1, 2, 0, -1, 7]));
// console.timeEnd('QuickSort');
module.exports = {
    QuickSort
}