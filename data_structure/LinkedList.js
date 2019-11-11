const {
    Node, defaultEq
} = require("./Node");


/**
 * @class Linked List
 */
class LinkedList {
    constructor(func) {
        this.count = 0;
        this.head = undefined;
        this.equalFunc = this.func || defaultEq;
    }

    push(value) {
        const node = new Node(value);
        let current = this.head;
        if (this.head == undefined) {
            this.head = node;
        }
        while (current.next != null) {
            current = current.next
        }
        current.next = node;
        this.count++;
        return;
    }

    insert(value, postion) {
        if (postion >= 0 && postion < this.count) {
            const node = new Node(value);
            let current = this.head;
            if (postion == 0) {
                if (this.head == undefined) {
                    this.head = node;
                }
                this.head = node;
                node.next = current;
            } else {
                let previous = this.getElementAt(postion - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
        }
        this.count++;
    }

    getElementAt(index) {
        let node = this.head;
        if (index >= 0 && index < this.count) {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    indexOf(value) {

    }

    remove(value) {
        if (this.isEmpty()) {
            return undefined;
        }
    }

    removeAt(index) {
        if (this.isEmpty()) {
            return undefined;
        }
        if (index <= 0 && index < this.count) {

            let current = this.head
            if (index == 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);

            }
            this.count--;
        }
        return undefined;
    }

    isEmpty() {
        return this.count == 0;
    }

    size() {
        return this.count;
    }

    toString() {

    }

}


module.exports = {
    LinkedList
}