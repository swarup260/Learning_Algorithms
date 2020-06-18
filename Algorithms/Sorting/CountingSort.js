/**
 * Sort the Element in a given array
 * complexity of Counting Sort is O(n+k)
 * Distributed and Interger Sorting Alogrithms
 * @param {Array} array 
 */
const CountingSort = array => {
    if (array.length < 2) {
        return array;
    }

    const maxValue = findMaxValue(array);

    const counts = new Array(maxValue + 1);
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0;
        }
        counts[element]++;
    });
    let sortIndexed = 0;
    counts.forEach((count, i) => {
        while (count > 0) {
            array[sortIndexed++] = i;
            count--;
        }
    });
    return array;
}

/**
 * return the max. value in a given array
 * @param {Array} array 
 * @returns Number
 */
const findMaxValue = array => {
    let max = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index];
        }
    }

    return max;
}


/**
 * Sort the Element in a given array
 * complexity of Counting Sort is O(n+k)
 * Distributed and Interger Sorting Alogrithms
 * @param {Array} array 
 */
const CountingSortForNegative = array => {
    if (array.length < 2) {
        return array;
    }
    const {
        min,
        max
    } = findMinMax(array);
    const counts = {};
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0;
        }
        counts[element]++;
    });
    for (let index = min, sortIndexed = 0; index <= max; index++) {
        while (counts[index] > 0) {
            array[sortIndexed++] = index;
            counts[index]--;
        }

    }
    return array;
}

/**
 * 
 * @param {Array} array 
 */
const findMinMax = array => {
    let min = Number.MAX_SAFE_INTEGER,
        max = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < min) {
            min = array[index];
        }
        if (array[index] > max) {
            max = array[index];
        }
    }

    return {
        min,
        max
    }
}

// console.time('CountingSort');
// console.log(CountingSortForNegative([5, 3, 3, 10, 1, 2, 0, -1, -3, 7, 7, 7, 7, 7, 7, 7]));
// // console.log(CountingSortForNegative([5, 4, 3, 2, 3, 1, 0]));
// console.timeEnd('CountingSort');


module.exports = {
    CountingSort,
    CountingSortForNegative,
    findMinMax
}