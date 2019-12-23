const {
    Node, defaultEq
} = require("./models/Node");

/**
 * @class Linked List
 */
class LinkedList {
    constructor(equalFunc = defaultEq) {
        this.count = 0;
        this.head = undefined;
        this.equalFunc = equalFunc;
    }

    getHead(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.element;
    }

    push(element) {
        const node = new Node(element);
        let current = this.head;
        if (this.head == undefined) {
            this.head = node;
        }else{
            while (current.next != null) {
                current = current.next
            }
            current.next = node;
        }
        this.count++;
        return;
    }

    insert(element, postion) {
        if (postion >= 0 && postion <= this.count) {
            const node = new Node(element);
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

    indexOf(element) {
        let current = this.head;
        for (let index = 0; index < this.count && current != null; index++) {
            if (this.equalFunc(current.element,element)) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        if (this.isEmpty()) {
            return undefined;
        }
        let index = this.indexOf(element);
        if (index != -1) {
            this.removeAt(index);
        }
        return undefined;
    }

    removeAt(index) {
        if (this.isEmpty()) {
            return undefined;
        }        
        if (index >= 0 && index < this.count) {
            
            let current = this.head
            if (index == 0) {
                this.head = current.next;
            } else {
                let previous = this.getElementAt(index - 1);                
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
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
        if (this.isEmpty()) {
            return  ""
        }
        let string = `${this.head.element}`;
        let current = this.head.next;
        for (let index = 1; index < this.count && current != null; index++) {
            string = `${string}, ${current.element}`   
            current = current.next;
        }
        return string;
    }

    toArray(){
        let elements = [];
        let current = this.head;
        while(this.count && current != null){
            elements.push(current.element);
            current = current.next;
        }
        return elements;
    }

}


module.exports = {
    LinkedList
}