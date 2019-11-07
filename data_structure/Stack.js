/** 
* @class Stack implement using Array
*/
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        this.items.pop()
    }

    isEmpty() {
        return this.items.length == 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
    
    clear(){
        this.items = [];
    }

    toString(){
        return this.items.toString();
    }


}

/**
* @class Stack implement using Object
*/
class StackObject {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(value) {
        this.items[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count --;
        delete this.items[this.count];
    }

    isEmpty() {
        return this.count == 0;
    }

    peek() {
        return this.items[this.count-1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        /* while (!this.isEmpty()) {
            this.pop()
        } */
        this.items = {};
        return this.items;
    }
    
    toString(){
        let string = "";
        for (let index = 0; index < this.count; index++) {
            string += `${this.items[index]}`
            if (this.items[index+1]) {
                string += ",";
            }
        }
        return string;
    }

}


module.exports = {Stack, StackObject};