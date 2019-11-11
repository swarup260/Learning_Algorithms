/**
 *  Linked List Node
 */


 class Node {
     constructor(value){
         this.value = value;
         this.next = null;
     }
 }


const defaultEq = (a,b) => {
    return a == b;
}

module.exports = { Node, defaultEq}