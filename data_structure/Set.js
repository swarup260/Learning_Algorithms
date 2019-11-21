/**
 * @class Set Implementation 
 */

class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        /* return element in this.items; */
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
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


    elements(){
        /* return Object.elements(this.items); */
        let elements = [];
        for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                elements.push(key);
            }
        }
        return elements;
    }

    union(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const unionSet = new Set();
        this.elements().forEach(element => {
            unionSet.add(element);
        });
        otherSet.elements().forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
        
    }
    intersection(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const intersectionSet = new Set();
        this.elements().forEach(element => {
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
        this.elements().forEach(element => {
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
        this.elements().every(element => {
            if (!otherSet.has(element)) {
                isSubset = false;
                return;
            }
        });

        return isSubset;

    }

    toString(){
        return this.elements().toString();
    }
}


module.exports = {
    Set
}