var assert = require('assert');
var expect = require('expect.js');
const { LinkedList } = require('../data_structure/LinkedList');

describe("Linked List " ,function(){
    const linkedList = new LinkedList();
    it('Must Be Instance of LinkedList', function () {
        assert.equal(linkedList instanceof LinkedList, true);
    });
    it("Head Must be undefined",function(){
        assert.equal(linkedList.head, undefined);
    });

    it("Head Must be 'swarup'",function(){
        linkedList.push("swarup");
        assert.equal(linkedList.head.element, "swarup");
    });
    it("Head Must be 'swarup'",function(){
        linkedList.push("mallika");
        assert.equal(linkedList.head.element, "swarup");
    });
    it("Head Must be 'papa' since the element was insert at '0' index",function(){
        linkedList.insert("papa",0);
        assert.equal(linkedList.head.element, "papa");
    });
    it("Linked list size must be equal to 3",function(){
        assert.equal(linkedList.size(), 3);
    });

    it("Linked List ToString must be equal to  'papa, swarup, mallika'",function(){
        assert.equal(linkedList.toString(), "papa, swarup, mallika");
    });
    it("Linked List ToArray '['papa', 'swarup', 'mallika']'",function(){
        // expect([1, 2, 3]).to.eql([1, 2, 3]); // passes
        expect(linkedList.toArray()).to.eql(["papa", "swarup", "mallika"]);
    });

})