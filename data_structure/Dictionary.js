/**
 * @class Dictionary Data Structure or also know as Map
 */

const {
    KeyValue
} = require('./models/KeyValue');
const {
    toStringFunc
} = require('../utils/function');

class Dictionary {
    constructor(toStrFn = toStringFunc) {
        this.table = {};
        this.toStrFn = toStrFn;
    }

    set(key, value) {
        if (key != null & value != null) {
            const stringKey = this.toStrFn(key);
            this.table[stringKey] = new KeyValue(key, value);
            return true;
        }
        return false;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] !== null;
    }


    get(key) {
        const keyValuesPair = this.table[this.toStrFn(key)];
        return keyValuesPair != null ? keyValuesPair.value : null;

    }

    keys() {
        return this.keyValues().map(element => element.key);
    }

    values() {
        return this.keyValues().map(element => element.value);
    }

    keyValues() {
        const keyValuePairs = [];
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                keyValuePairs.push(this.table[key])
            }
        }
        return keyValuePairs;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    isEmpty() {
        return Object.keys(this.table).length == 0;
    }
    size() {
        return Object.keys(this.table).length;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let keyValuePairs = this.keyValues();
        let string = `${keyValuePairs[0].toString()}`
        for (let index = 1; index < keyValuePairs.length; index++) {
            string = `${string}, ${keyValuePairs[index].toString()}`
        }
        return string;
    }

    forEach(callback) {
        let keyValuePairs = this.keyValues();
        for (let index = 0; index < keyValuePairs.length; index++) {
            const result = callback(keyValuePairs[index].key, keyValuePairs[index].value);
            if (result == false) {
                break;
            }

        }
    }
}



module.exports = {
    Dictionary
}