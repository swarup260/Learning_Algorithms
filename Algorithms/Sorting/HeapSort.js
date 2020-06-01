const { MaxHeap } = require('../../data_structure/MaxHeap');
const {
    defaultCompare,
    Compare
} = require('../../utils/function');

// function HeapSort(array) {
//     let heapSize = array.length;
//     buildMaxHeap(array, defaultCompare);
//     while (heapSize > 1) {
//         swap(array, 0, --heapSize); // step 2
//         heapify(array, 0, heapSize, defaultCompare); // step 3
//     }
//     return array;
// }
function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn); // step 1
    while (heapSize > 1) {
        console.log(heapSize);
        
        swap(array, 0, --heapSize); // step 2        
        heapify(array, 0, heapSize, compareFn); // step 3
    }
    return array;
}

function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}
// function BuildMaxHeap(array) {
//     const heap = new MaxHeap();
//     for (let index = 0; index < array.length; index++) {
//         heap.insert(array[index]);
//     }
//     return heap;
// }


function swap(array , a ,b) {
    const tmp = array[a];
    array[a] =  array[b];
    array[b] = tmp;
}

function heapify(array ,index,length , compareFunc) {
    let element = index;
    const left = (index * 2) +1;
    const right = (index * 2) +2;    
    const size = length;
    if (left < size && compareFunc(array[element], array[left])  > Compare.BIGGER_THAN ) {
        element = left;
    }
    if (right < size && compareFunc(array[element], array[right])  > Compare.BIGGER_THAN ) {
        element = right;
    }
    if (index !== element) {
        swap(array,index,element);
        heapfiy(element);
    }
}


const array = [10,4,2,5,7,20];
console.log(heapSort(array));
