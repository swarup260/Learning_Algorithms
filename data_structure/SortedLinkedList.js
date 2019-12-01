
const {LinkedList} = require('./LinkedList');
const {Node} = require('./Node');
const {defaultCompare,Compare} = require('../utils/function')
/**
 * @class SortedLinkedList
 */
class SortedLinkedList extends LinkedList {
    constructor(func, CompareFun = defaultCompare){
        super(func);
        this.CompareFun = CompareFun;
    }

    insert(element, index =0){
        if (this.isEmpty()) {
            return super.insert(element,index)
        }else{
            const pos = getNextSortIndex(element);
            return super.insert(element,pos);
        }
    }

    getNextSortIndex(element){
        let current = this.head;
        let i = 0;
        for (; i < current.next != null ; i++) {
            if (this.CompareFun(element,current.element) == Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}