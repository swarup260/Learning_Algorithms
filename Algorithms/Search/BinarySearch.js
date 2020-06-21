const {
    defaultEqualFun,
    defaultCompare,
    lessOrEquals,
    Compare
} = require('../../utils/function');

const {
    QuickSort
} = require('../Sorting/QuickSort');
const {
    MergeSort
} = require('../Sorting/MergeSort');

/**
 * 
 * @param {Array} array 
 * @param {any} key 
 * @param {Function} equalFun 
 * @param {Function} compareFun 
 */
const BinarySearch = (array , key , equalFun = defaultEqualFun, compareFun = defaultCompare) => {
    const sortedArray = MergeSort(array);
    let low = 0;
    let high = sortedArray.length  -1;
    while(lessOrEquals(low , high ,compareFun)){
        let mid = Math.floor((high + low)/2);
        let element = sortedArray[mid];
        if (compareFun(element,key) == Compare.LESS_THAN) {
            low = mid + 1;
        } else if(compareFun(element,key) == Compare.BIGGER_THAN) {
            high = mid - 1;
        }else {
            return true;
        }
    }
    return false;
}

// console.time('BinarySearch')
// console.log(BinarySearch([ 15, 8, 0, 6, 19, 4, 13, 3, 18, 7, 9, 1, 14, 16, 17, 2, 12, 5, 11, 10 ] , 30));
// console.timeEnd('BinarySearch')

module.exports = {
    BinarySearch
}