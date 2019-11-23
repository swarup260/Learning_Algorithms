/**
 * @class Double Linked List
 */

const {
    LinkedList
} = require('./LinkedList');
const {
    DoublyNode
} = require('./DoublyNode');

class DoubleLinkedList extends LinkedList {
    constructor(func) {
        super(func);
        this.tail = undefined;
    }

    push(element) {
        let node = new DoublyNode(element);
        if (this.head == undefined) {
            this.head = node;
            this.tail = node;
        } else {
            let current = this.tail;
            current.next = node;
            node.previous = current;
            this.tail = node;

        }
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index < this.count) {

            let node = new DoublyNode(element);
            let current = this.head;
            if (index == 0) {
                if (this.head == undefined) {
                    this.head = node;
                    this.tail = node;
                } else {
                    current.previous = node;
                    node.next = current;
                    this.head = node;
                }
            } else {
                let previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
                node.previous = previous;
            }
            this.count++;
        }
    }

    removeAt(index) {
        if (this.isEmpty()) {
            return undefined;
        }
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index == 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
                current.previous = previous;
            }
        }
    }

}

module.exports = {
    DoubleLinkedList
}