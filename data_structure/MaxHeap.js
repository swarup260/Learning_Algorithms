const {
    defaultCompare,
    Compare
} = require('../utils/function');

const {MinHeap} = require('./MinHeap');

const reverseCompare = (compareFunc) => (a, b) => compareFunc(b, a)

class MaxHeap extends MinHeap {
    constructor(compareFunc = defaultCompare){
        super(compareFunc);
        this.compareFunc =  reverseCompare(compareFunc);
    }
}


module.exports = {
    MaxHeap 
}