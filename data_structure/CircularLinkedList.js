const {LinkedList} = require('./LinkedList');

/**
 * @class Circular Linked List 
 */

 class CircularLinkedList extends  LinkedList {
     constructor(){
         super();
         this.tail = undefined;
     }

     push(value){
         let node = new Node(value);
         let current = this.head;
         if (current == undefined) {
             this.head = node;
             this.tail = node;
         } else {
             while(current.next != null){
                 current = current.next;
             }
             current.next = node;
         }
     }


 }
