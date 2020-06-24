const {
    defaultEqualFun,
    defaultCompare,
    lessOrEquals,
    biggerOrEquals,
    diffFn,
    Compare
} = require('../../utils/function');

const {
    QuickSort
} = require('../Sorting/QuickSort');
const {
    MergeSort
} = require('../Sorting/MergeSort');
/**
 * Search an give array 
 * Requirement
 * 1. Sorted 
 * 2. Uniformly distributions [ if not then efficiency will decrease ]
 * @param {Array} array 
 * @param {any} key 
 */
const InterpolationSearch = (array, key, equalFun = defaultEqualFun, compareFun = defaultCompare) => {
    const sortedArray = QuickSort(array);
    let low = 0,
        high = sortedArray.length - 1;
    let position = -1,
        delta = -1;
    while (
        low <= high &&
        biggerOrEquals(key, sortedArray[low], compareFun) &&
        lessOrEquals(key, sortedArray[high], compareFun)
    ) {
        delta = diffFn(key, sortedArray[low]) / diffFn(sortedArray[high], sortedArray[low]);
        position = low + Math.floor((high - low) * delta);
        if (equalFun(sortedArray[position], key)) {
            return true;
        }

        if (compareFun(sortedArray[position], key) == Compare.LESS_THAN) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    return false;
}
console.time('InterpolationSearch');
// console.log(InterpolationSearch([1, 10,15,50,100,89,102], 15));
// console.log(InterpolationSearch([0.0, 0.2 ,0.4, 0.6, 0.8 ,1.0, 1.2 ,1.4 ,1.6, 1.8 ,2.0 , 500 , 1000, 1500, 2000, 2500, 3000], 0.8));
console.timeEnd('InterpolationSearch');

module.exports = {
    InterpolationSearch
}