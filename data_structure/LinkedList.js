const {
    Node
} = require("./Node");


/**
 * @class Linked List
 */
class LinkedList {
    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    push(value) {
        const node = new Node(value);
        let current = this.head;
        if (this.head == undefined) {
            this.head = node;
            this.count++;
            return;

        }
        while (current.next != null) {
            current = current.next
        }
        this.count++;
        current.next = node;
        return;
    }

    insert(value, postion) {        
        if (postion >= 0  && postion < this.count) {
            console.log();
            
            const node = new Node(value);
            let current = this.head;
            if (postion == 0) {
                if (this.head == undefined) {
                    this.head = node;
                }
                this.head = node;
                node.next = current;
                this.count++;
                return;
            } else {
                let previous = this.getElementAt(postion-1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                this.count++;
            }
        }
        return this;
    }

    getElementAt(index) {
        let node = this.head;
        if (index >= 0  && index < this.count) {
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