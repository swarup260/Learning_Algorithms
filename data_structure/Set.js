/**
 * @class Set Implementation 
 */

class Set {
    constructor() {
        this.items = {};
    }

    has(value) {
        /* return value in this.items; */
        return Object.prototype.hasOwnProperty.call(this.items, value);
    }

    add(value) {
        if (!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }

    delete(value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    isEmpty() {
        return Object.keys(this.items).length == 0;
    }

    size() {
        return Object.keys(this.items).length;
    }


    values(){
        /* return Object.values(this.items); */
        let values = [];
        for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    union(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const unionSet = new Set();
        this.values().forEach(element => {
            unionSet.add(element);
        });
        otherSet.values().forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
        
    }
    intersection(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const intersectionSet = new Set();
        this.values().forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        
        return intersectionSet;
    }
    difference(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const differenceSet = new Set();
        this.values().forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }
    isSubset(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        if (!(otherSet.size() > this.size())) {
            return false;
        }
        let isSubset  = true;
        this.values().every(element => {
            if (!otherSet.has(element)) {
                isSubset = false;
                return;
            }
        });

        return isSubset;

    }

    toString(){
        return this.values().toString();
    }
}


module.exports = {
    Set
}