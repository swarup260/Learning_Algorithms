const {LinkedList} = require('./LinkedList');
const {Node} = require('./models/Node');
/**
 * @class Circular Linked List 
 */

 class CircularLinkedList extends  LinkedList {
     constructor(){
         super();
     }

     push(element){
         let node = new Node(element);
         let current = this.head;
         if (current == undefined) {
             this.head = node;
             node.next = this.head;
         } else {
             while(current.next != null){
                 current = current.next;
             }
             current.next = node;
             node.next = this.head;
         }
         this.count++;
         return this;
     }

     insert(element,index){
         if (index >= 0 && index <= this.count) {
             const node = new Node(element);
             let current = this.head
             if (index == 0) {
                 if (this.head == undefined) {
                     this.head = node;
                     node.next = this.head;
                }else{
                    node.next = current;
                    this.head = node;
                 }
             }else if (index == this.count) {
                 const previous = this.getElementAt(index -1);
                 previous.next = node;
                 node.next = this.head;
             }else{
                const previous = this.getElementAt(index -1);
                current = previous.next;
                previous.next = node;
                node.next = current;
             }
             this.count++;
             return this;
         }
         return undefined;
     }
    
     removeAt(index){
         if (index >= 0 && index < this.count) {
            if (this.isEmpty()) {
                return undefined;
            }
            let current = this.head
             if (index == 0) {
                 this.head = current.next;
             } else if(index == this.count-1) {
                const previous = this.getElementAt(index-1);
                 current = previous.next;
                 previous.next = this.head;
             }else{
                const previous = this.getElementAt(index -1);
                current = previous.next;
                previous.next = current.next;
             }

             this.count --;
             return current.element;
         }
         return undefined;
     }

 }


module.exports = {
    CircularLinkedList
}