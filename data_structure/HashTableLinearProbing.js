const {
    HashTable
} = require('./HashTable');
const {
    KeyValue
} = require('./models/KeyValue');



class HashTableLinearProbing extends HashTable {
    constructor() {
        super();
    }

    put(key, value) {
        if (key != null && value != null) {
            const hashKey = this.getHashCode(key);
            if (this.table[hashKey] == null) {
                this.table[hashKey] = new KeyValue(key, value);
            } else {

                let position = hashKey + 1;
                while (this.table[position] != null) {
                    position++;
                }
                this.table[position] = new KeyValue(key, value);
            }
            return true;
        }
        return false;
    }

    get(key) {
        const hashKey = this.getHashCode(key);
        if (this.table[hashKey] != null) {
            if (this.table[hashKey].key == key) {
                return this.table[hashKey].value;
            }

            let position = hashKey + 1;
            while (this.table[position] != null && this.table[position].key != key) {
                position++;
            }

            if (this.table[position] && this.table[position].key == key) {
                return this.table[position].value;
            }
        }
        return undefined;
    }

    remove(key) {
        const hashKey = this.getHashCode(key);
        if (this.table[hashKey] != null) {
            if (this.table[hashKey].key == key) {
                delete this.table[hashKey];
                this.verifyRemoveSideEffect(key, hashKey);
                return true;
            }

            let position = hashKey + 1;
            while (this.table[position] != null && this.table[position].key != key) {
                position++;
            }

            if (this.table[position] && this.table[position].key == key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
        }
        return false;

    }


    verifyRemoveSideEffect(key, removePosition) {
        const hashKey = this.getHashCode(key);
        let position = removePosition +1;
        while(this.table[position] != null){
            const hashKeyPosition = this.getHashCode(this.table[position].key);
            if (hashKeyPosition <= hashKey || hashKeyPosition <= removePosition ) {
                this.table[removePosition] = this.table[position];
                delete this.table[position];
                removePosition  = position;
            }
            position ++;
        }
    }
}


module.exports = {
    HashTableLinearProbing
};