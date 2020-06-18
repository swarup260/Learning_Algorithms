const {
    findMinMax
} = require('./CountingSort');

const {
    MergeSort
} = require('./MergeSort');
const {
    InsertionSort
} = require('./InsertionSort');

/**
 * Sort the givent element in a array its distributed sorting
 * complexity is O(n+k)
 * n -> number of elements to be sorted 
 * k -> number of buckets
 * @param {array} array 
 * @param {Number} bucketsCounts 
 * @param {Function} sortFunc 
 */
const BucketSort = (array, bucketsCounts = 5 , sortFunc = InsertionSort) => {
    if (array.length < 2) {
        return array;
    }
    // sub divide the array into buckets
    const buckets = createBuckets(array, bucketsCounts);
    // sorted the individual bucket and merge into one
    return sortedBuckets(buckets,sortFunc);
}

/**
 * 
 * @param {array} array 
 * @param {Number} bucketsCounts 
 */
const createBuckets = (array, bucketsCounts) => {
    const {
        min,
        max
    } = findMinMax(array);
    const bucketSize = Math.floor((max - min) / bucketsCounts) + 1;
    // Initalize the buckets 
    const buckets = [];
    for (let i = 0; i < bucketSize; i++) {
        buckets[i] = [];
    }
    // insert the element into buckets
    for (let index = 0; index < array.length; index++) {
        // find the correct bucket to sub divide the elements into small bucket.
        let bucketIndex = Math.floor((array[index] - min) / bucketSize);
        if (!buckets[bucketIndex]) {
            bucketIndex -= 1;
        }
        buckets[bucketIndex].push(array[index]);
    }

    return buckets;

}

/**
 * 
 * @param {Array} buckets 
 *  * @param {Function} sortFunc 
 */
const sortedBuckets = (buckets,sortFun) => {
    const sortedBucket = [];
    // sort the individual sort combine into a sorted array
    for (let index = 0; index < buckets.length; index++) {
        if (buckets[index] != null) {
            sortedBucket.push(...sortFun(buckets[index]));
        }
    }
    return sortedBucket;
}

// console.time('BucketSort');
// console.log(BucketSort([5, 3, 10, 1, 0, -1, 7, 10, 15]));
// console.timeEnd('BucketSort');

module.exports = {
    BucketSort
}