const {
    findMinMax
} = require('./CountingSort')
/**
  * Sort the Element in a given array
 * complexity of Radix Sort is O d(n+k)
 * Distributed and Interger Sorting Alogrithms
 * @param {Array} array 
 * @param {Number} radixBase 
 */
const RadixSort = (array, radixBase = 10) => {
    if (array.length < 2) {
        return array;
    }
    const {
        min,
        max
    } = findMinMax(array);
    let significantDigit = 1;
    while (((max - min) / significantDigit) >= 1) {
        array = createCountRadixSort(array, min, significantDigit, radixBase);
        significantDigit *= radixBase;
    }
    return array;
}

/**
 * 
 * @param {Array} array 
 * @param {Number} minValue 
 * @param {Number} significantDigit 
 * @param {Number} radixBase 
 */
const createCountRadixSort = (array, minValue, significantDigit, radixBase) => {
    const bucket = [];
    const aux = [];
    let bucketIndex;

    // Intialize the buckets
    for (let index = 0; index < radixBase; index++) {
        bucket[index] = 0;
    } 
    // counting sort based	on	the	significant	digit	of	the	numbers that are in array
    for (let index = 0; index < array.length; index++) {
        bucketIndex = Math.floor(((array[index] - minValue) / significantDigit) % radixBase);
        bucket[bucketIndex]++;
    }
    // compute the cumulates so we have a correct count
    for (let index = 1; index < radixBase; index++) {
        bucket[index] += bucket[index - 1];
    }
    //we will retrieve its	significant	digit again and	will move its value	to	the	aux	array	(subtracting the count from	the	buckets array )
    for (let index = array.length - 1; index >= 0; index--) {
        bucketIndex = Math.floor(((array[index] - minValue) / significantDigit) % radixBase);
        aux[--bucket[bucketIndex]] = array[index];
    }
    return aux;
}


console.time('RadixSort')
console.log(RadixSort([1, 9, 3, 5, 7,20 ,8,62, 4, 5 ,15,101]))
console.timeEnd('RadixSort');
module.exports = {
    RadixSort
}