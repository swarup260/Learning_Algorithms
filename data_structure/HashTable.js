const {
    KeyValue
} = require('./KeyValue');
const {
    toStringFunc
} = require('../utils/function');

class HashTable {
    constructor() {
        this.table = {};
    }

    _loseloseHashCode(key) {
        if (typeof key == "number") {
            return key;
        }
        const keyString = toStringFunc(key);
        let code = 0;
        for (let index = 0; index < key.length; index++) {
            code += key.charCodeAt(index);
        }
        return code % 37;
    }


    getHasCode(key) {
        return this._loseloseHashCode(key);
    }


    put(key, value) {
        if (key != null && value != null) {
            const keyHash = this.getHasCode(key);
            this.table[keyHash] = new KeyValue(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        const keyHash = this.getHasCode(key);
        if (this.table[keyHash]) {
            const value = this.table[keyHash];
            delete this.table[keyHash];
            return value;
        }
        return undefined;
    }

    get(key) {
        const keyHash = this.getHasCode(key);
        return this.table[keyHash] != null ? this.table[keyHash].value : undefined;
    }

}


module.exports = {
    HashTable
}