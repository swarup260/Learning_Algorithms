const {
    HashTable
} = require('./HashTable');
const {
    LinkedList
} = require('./LinkedList');
const {
    KeyValue
} = require('./models/KeyValue');

class HashTableSeparateChaining extends HashTable {
    constructor() {
        super();
    }

    put(key, value) {
        if (key != null && value != null) {

            const hashKey = this.getHashCode(key);
            if (this.table[hashKey] == null) {
                this.table[hashKey] = new LinkedList();
            }
            this.table[hashKey].push(new KeyValue(key, value));
            return true;
        }

        return false;
    }

    get(key) {
        const hashKey = this.getHashCode(key);
        const linkedList = this.table[hashKey];
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
        const hashKey = this.getHashCode(key);
        const linkedList = this.table[hashKey];
        if (linkedList.size() > 0 && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current.next != null) {
                if (current.element.key == key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) { 
                        delete this.table[hashKey]; 
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