/** 
* @class Stack implement using Array
*/
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
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

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count-1];
        this.count --;
        delete this.items[this.count];
        
        return result;
    }

    isEmpty() {
        return this.count == 0;
    }

    peek() {
        return this.items[this.count-1];
    }

    size() {
        return this.count;
    }

    clear() {
        /* while (!this.isEmpty()) {
            this.pop()
        } */
        this.items = {};
        this.count = 0;
        return this.items;
    }
    
    toString(){
        let string = `${this.items[0]}`;
        for (let index = 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`
        }
        return string;
    }

}


module.exports = {Stack, StackObject};