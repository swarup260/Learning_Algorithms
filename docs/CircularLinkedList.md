#What is the Circular linked list?
>*Circular linked list is a linked list where all nodes are connected to form a circle. There is no NULL at the end. A circular linked list can be a singly circular linked list or doubly circular linked list.* - geeksforgeeks.org

![Circular Single Linked List](https://dev-to-uploads.s3.amazonaws.com/i/q1q3g8lilm941e9jh82l.png "Circular Single Linked List")

__Fig__: Circular Single Linked List

![Circular Doubly Linked List](https://dev-to-uploads.s3.amazonaws.com/i/9b96w073q2kgdddo2im9.png "Circular Doubly Linked List")

__Fig__: Circular Doubly Linked List

##List Of Operations Available
* All methods will same as __[single linked list](https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg)__. Only overwrite  the *insert*, *push* and *removeAt* methods

##Implementation of Circular linked list in Javascript
The CircularLinkedList class does not need and additional properties, so we can simply extend the LinkedList Class, only overwrite the required methods.
```javascript

class CircularLinkedList extends  LinkedList {
     constructor(){
         super();
     }
}

```

##Push
Push method will append an element at the end of the LinkedList. While appending an element (node), There are two scenarios :
1. LinkedList is **Empty**.
   * set the linked list head property to the new node.
   * set new node's next to the head, since circular LinkedList doesn't have a NULL pointer at the end.
 
2. LinkedList is **Not Empty**.
   * loop till the end.
   * set the End node to the new node i.e end node.next to the node.
   * set new node's next to the head.
after pushing  an element to linked list increment the counter 

```javascript
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
```
## Insert

Insert method will insert an element at a given position. The position must be greater than zero and less than or equal to count (length of LinkedList). If not return undefined.
1. The index is Zero
 * Empty
   * Same as push method condition, when LinkedList is empty
 * Not Empty
    * set the new node to the current head
    * head to the new node
2. The index is equal to count .ie length of LinkedList
   * Get the (index - 1) element using the getElementAt method, store as the previous Element.
   * Set previous to the new node. And node's next to the head.
3. The index is greater than  Zero
  * Get the (index - 1) element using the getElementAt method, store as the previous Element.
  * The indexed element will be previous. next, store as current.
  * Set previous to the new node. And node's next to previous.
	
after pushing  an element to linked list increment the counter 

![Insert](https://dev-to-uploads.s3.amazonaws.com/i/et6mdpc3hzey5l6fbuop.png)

```javascript
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
```
## RemoveAt
RemovAt method will remove an element at a given position. The position must valid the index's out of bound error, by checking that the position is greater than and equal to zero and less than count. If not return undefined.
1. LinkedList is Empty
    * return undefined
2. The index is Zero.
    * Move the head to the next node.
3. The index is equal to the count - 1.
 * Get the (index - 1) element using the getElementAt method, store as the previous Element.
 * Set the previous's next to the head. 

  ![Removing the tail element](https://dev-to-uploads.s3.amazonaws.com/i/eicjw07qubdm2v6lrkn1.png)

4. The index is greater than  Zero
  * Get the (index - 1) element using the getElementAt method, store as the previous Element.
  * The indexed element will be previous.next, store as current.
  * set the previous.next to the current.next. 

    ![Removing any element](https://dev-to-uploads.s3.amazonaws.com/i/nz1wcce60nuhskwhjgwd.png)

after removing  an element from the  linked list decrement  the counter 



```javascript
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
```
Get the full source code [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/CircularLinkedList.js)

### Conclusion : 

Complexity will be the same as Single Linked List. This blog only covers a singly circular linked list. But the doubly circular linked list will similar to the doubly linked list.

