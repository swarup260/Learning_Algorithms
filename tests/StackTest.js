var assert = require('assert');
const {
    StackObject
} = require('../data_structure/Stack')

describe('Stack', function () {
    const stack = new StackObject();
    it('Must Be Instance of Stack Object', function () {
        assert.equal(stack instanceof StackObject, true);
    });
    it('Push An Element to Stack And Length must be One', function () {
        stack.push("Swarup")
        assert.equal(stack.size(), 1);
    });
    it('Peek Element Must "Swarup" As its the top element of the stack', function () {
        assert.equal(stack.peek(), "Swarup");
    });
    it('After Clear the Stack Must be Empty', function () {
        stack.clear();
        assert.equal(stack.size(), 0);
    });
    
});