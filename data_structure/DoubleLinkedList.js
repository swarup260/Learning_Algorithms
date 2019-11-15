/**
 * @class Double Linked List
 */

 const {LinkedList } = require('./LinkedList');
const { DoubleNode } = require('./DoubleNode');

 class DoubleLinkedList extends LinkedList {
    constructor(){
        super();
    }

    push(value){
        const node = new DoubleNode(value);
        let current = this.head;
        if (this.head == null) {
            this.head = node;
            node.next = this.head;
        }
    }
 }

 module.exports = {
     DoubleLinkedList
 }