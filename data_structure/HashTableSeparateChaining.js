const {
    HashTable
} = require('./HashTable');
const {
    LinkedList
} = require('./LinkedList');
const {
    KeyValue
} = require('./KeyValue');

class HashTableSeparateChaining extends HashTable {
    constructor() {
        super();
    }

    put(key, value) {
        if (key != null && value != null) {

            const keyHash = this.getHasCode(key);
            if (this.table[keyHash] == null) {
                this.table[keyHash] = new LinkedList();
            }
            this.table[keyHash].push(new KeyValue(key, value));
            return true;
        }

        return false;
    }

    get(key) {
        const keyHash = this.getHasCode(key);
        const linkedList = this.table[keyHash];
        if (linkedList.size() > 0 && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current.next != null) {
                if (current.element.key == key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
    remove(key) {
        const keyHash = this.getHasCode(key);
        const linkedList = this.table[keyHash];
        if (linkedList.size() > 0 && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current.next != null) {
                if (current.element.key == key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) { 
                        delete this.table[keyHash]; 
                    }
                    return current.element;
                }
                current = current.next;
            }
        }
        return undefined;
    }

}



module.exports = {
    HashTableSeparateChaining
}