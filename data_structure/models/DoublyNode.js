/**
 *  @class Double Linked Node
 */

const {
    Node
} = require('./Node');


class DoublyNode extends Node {
    constructor(element, next, previous) {
        super(element, next);
        this.previous = previous;
    }
}

module.exports = {
    DoublyNode
}