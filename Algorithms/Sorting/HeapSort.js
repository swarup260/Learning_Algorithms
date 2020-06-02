const {
    MaxHeap
} = require('../../data_structure/MaxHeap');
const {
    defaultCompare,
    Compare
} = require('../../utils/function');

function swap(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function builMaxHeap(arr, compareFun) {
    for (let index = (arr.length / 2) - 1; index >= 0; index--) {
        heapify(arr, arr.length, index, compareFun)
    }
    return arr;
}

function heapify(arr, length, index, compareFun) {
    let element = index;
    let left = (2 * index) + 1;
    let right = (2 * index) + 2;
    
    if (left < length && compareFun(arr[element], arr[left]) ==  Compare.LESS_THAN) {
        element = left;
    }
    if (right < length && compareFun(arr[element], arr[right])  ==  Compare.LESS_THAN) {
        element = right;
    }

    if (element != index) {
        swap(arr, index, element);
        heapify(arr, length, element, compareFun);
    }


}


function HeapSort(arr, compareFun = defaultCompare) {
    let heapSize = arr.length;
    builMaxHeap(arr, compareFun);
    while (heapSize > 1) {
        swap(arr, 0, --heapSize);
        heapify(arr, heapSize, 0, compareFun);
    }
    return arr;
}


module.exports = {
    HeapSort
};