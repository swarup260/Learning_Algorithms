const {
    defaultCompare,
    Compare
} = require('../utils/function');

const {MinHeap} = require('./MinHeap');

const reverseCompare =  (compareFunc) => (a,b) => compareFunc(b,a); 

class Maxheap extends MinHeap {
    constructor(compareFunc = defaultCompare){
        super();
        compareFunc =  reverseCompare(compareFunc);
    }
}


module.exports = {
    Maxheap 
}