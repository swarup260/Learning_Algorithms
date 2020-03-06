var assert = require('assert');
const { Set } = require('../data_structure/Set');

describe("Set", function () {
    const set = new Set();
    it('Must Be Instance of Set', function () {
        assert.equal(set instanceof Set, true);
    });
    it('Add Element in Set and Length Must be One', function () {
        set.add("Swarup");
        assert.equal(set.size(), 1);
    });

    it('Add Duplicate Element in Set and Length Must be One', function () {
        set.add("Swarup");
        assert.equal(set.size(), 1);
    });
    it('Remove Element from Set and set must be empty as no. element was one', function () {
        set.delete("swarup");        
        assert.equal(set.size(), 0);
        // assert.equal(set.isEmpty(), true);
    });

});