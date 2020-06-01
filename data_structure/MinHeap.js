const {
    defaultCompare,
    Compare
} = require('../utils/function');


class MinHeap {
    constructor(compareFunc = defaultCompare) {
        this.heap = [];
        this.compareFunc = compareFunc;
    }

    getParentIndex(index) {
        if (index == 0) {
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return (index * 2) + 1;
    }
    getRightChildIndex(index) {
        return (index * 2) + 2;
    }


    insert(element) {
        if (element != null) {
            this.heap.push(element);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;

    }

    siftUp(index) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFunc(this.heap[parent], this.heap[index]) == Compare.BIGGER_THAN ) {
            this.swap(this.heap,parent,index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    swap(array, a, b) {
        const tmp = array[a];
        array[a] = array[b];
        array[b] = tmp;
    }


    //Return the Min Values in Case of MinHeap 
    //Return the Max Values in Case of MaxHeap 
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() == 1) {
            return this.heap.shift();
        }

        const removeElement = this.heap.shift();
        this.siftDown(0);
        return removeElement;
    }


    //Heapify
    siftDown(index){
        let element = index;
        let left = this.getLeftChildIndex(index);
        let right = this.getRightChildIndex(index);
        const size = this.size();
        if (left < size && this.compareFunc(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN) {
            element = left;
        }
        if (right < size && this.compareFunc(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) {
            element = right;
        }

        if (index !== element) {
            this.swap(this.heap,index,element);
            this.siftDown(element);
        }
    }

    findMinimum() {
        if (!this.isEmpty()) {            
            return this.heap[0];
        }
        return undefined;
    }

    isEmpty() {
        return this.heap.length == 0;
    }

    size() {
        return this.heap.length;
    }

}


module.exports = {
    MinHeap
}