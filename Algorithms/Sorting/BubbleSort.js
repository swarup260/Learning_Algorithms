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
const BubbleSort = (array, compareFun = defaultCompare) => {
    const {
        length
    } = array;
    let swapFlag = false;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFun(array[j], array[j + 1]) == Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
                swapFlag = true;
            }

            if (!swapFlag) {
                break;
            }
        }

    }
    return array;
}
/**
 * 
 * @param {Array} array 
 * @param {Function} compareFun 
 */
const BubbleSortImporved = (array, compareFun = defaultCompare) => {
    const {
        length
    } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j + 1] !== undefined && compareFun(array[j], array[j + 1]) == Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }

        }

    }
    return array;
}

// console.time('BubbleSort')
// console.log(BubbleSort([10, 4, 7, 3, -1, 0, -6]));
// console.timeEnd('BubbleSort')
// console.time('BubbleSortImporved')
// console.log(BubbleSortImporved([10, 4, 7, 3, -1, 0, -6]));
// console.timeEnd('BubbleSortImporved')

module.exports = {
    BubbleSort,
    BubbleSortImporved
}