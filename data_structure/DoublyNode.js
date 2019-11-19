/**
 *  @class Double Linked Node
 */

const {
    Node
} = require('./Node');


class DoublyNode extends Node {
    constructor(value, next, previous) {
        super(value, next);
        this.previous = previous;
    }
}

module.exports = {
    DoublyNode
}