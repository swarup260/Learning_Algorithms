/**
 *  Linked List Node
 */


 class Node {
     constructor(element){
         this.element = element;
         this.next = null;
     }
 }


const defaultEq = (a,b) => {
    return a == b;
}

module.exports = { Node, defaultEq}