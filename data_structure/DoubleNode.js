/**
 *  @class Double Linked Node
 */

 const {Node} = require('./Node');


 class DoubleNode extends Node {
     constructor(value){
        super(value);
        this.previous = null;
     }
 }

module.exports = { DoubleNode }