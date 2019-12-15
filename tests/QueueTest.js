var assert = require('assert');
const { Queue } = require('../data_structure/Queue');

describe("Queue", function () {
    const queue = new Queue();
    it('Must Be Instance of Queue', function () {
        assert.equal(queue instanceof Queue, true);
    });
    it('Equeue an element from queue', function () {
        queue.equeue("Swarup");
        assert.equal(queue.size(),1);
    });
    it('Dqueue an element from queue', function () {
        queue.dequeue("Swarup");
        assert.equal(queue.size(),0);
    });
    it('Queue size must be 2', function () {
        queue.equeue("Swarup");
        queue.equeue("Roshan");
        assert.equal(queue.size(),2);
    });
    it('Peek element will be "Swarup" since its first element of the queue', function () {
        queue.equeue("Shreyash");
        assert.equal(queue.peek(),"Swarup");
    });
})