# DoublyLinkedList

## What is the Doubly linked list?

> _A Doubly Linked List contains an extra pointer, typically called the previous pointer, together with next pointer and data which are there in the singly linked list._ - geeksforgeeks.org

![Doubly Linked List](https://thepracticaldev.s3.amazonaws.com/i/5r9178k7elaqve5sjr4m.png)

### List Of Operations Available

* All methods will same as [**single linked list**](https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg).We only overwrite the _insert_, _push_ and _removeAt_ methods.

### Implementation of Doubly linked list in Javascript

The doubly linked list is a special type of linked list. We will just extend the linked list class i.e inherit the **LinkedList** class. we call the parent constructor by _**super**_ keyword to initialize the **count** and **head** properties of the Doubly linked list. besides, it has a **tail** property which refers to the end of the doubly linked list

```javascript
class DoubleLinkedList extends LinkedList {
    constructor(func) {
        super(func);
        this.tail = undefined;
    }
}
```

DoubleLinkedList provides a way of iterating it from start to end or vice versa. We can go forward using _next_ pointer or backward using _previous_ pointer, for this behavior, we will keep track of the previous element in each node, therefore, we will define a **DoublyNode** Which will extend the **Node class**, _element_ and _next_ properties will be initialized by parent constructor and a _previous_ property to keep track of the previous element.

```javascript
class DoublyNode extends Node {
    constructor(element, next, previous) {
        super(element, next);
        this.previous = previous;
    }
}
```

> **All methods implementation will be similar to the single linked list. In addition to the** _**next**_ **pointer, we also have the** _**previous**_ **pointer.**

### Push

When Pushing an element to a doubly-linked list, we have two scenarios:

* Doubly-linked list is **empty**. 
* Doubly-linked list is not empty and appends element at the end.

First, We will create a **DoublyNode** passing element as its _value_ if the head is _**undefined**_ then assign **head pointer** to the node **\({1}\)** and also tail **\({2}\)**. Since the end node points to the **tail pointer**.

Secondly, If the doubly linked list is not empty we will define a current variable equal to tail **\({3}\)**, points the new node to the **current.next** **\({4}\)** , **node.next** to current **\({5}\)** and **node.next** **\({6}\)** to the tail.

```javascript
   push(element) {
        let node = new DoublyNode(element);
        if (this.head == undefined) {
            this.head = node; //1
            this.tail = node;  //2
        } else {
            let current = this.tail; //3
            current.next = node; //4
            node.previous = current; //5
            this.tail = node; //6

        }
        this.count++;
    }
```

### Insert

To insert an element at a given the position; We validate the index, ie. **index the must be greater than zero and less than and equal to count**, there are three scenarios,

* Insert an element at the start of the list **\(Index == 0\)**.
  * We check if the list's head is undefined :
    * If undefined then the same as the push method \(head is undefined\) **\({2}\)**. Set head **\({3}\)** and tail **\({4}\)** to the new Node.
    * Else, move the list's head to the new node.Define current variable equal to head **\({1}\)**,Set node.next to current **\({6}\)**,current.previous to node **\({5}\)**  and head to the new Node **\({7}\)**.

!\[Insert an element at the start of the list\] \([https://thepracticaldev.s3.amazonaws.com/i/zuv8m9qdovl2ngx838tq.png](https://thepracticaldev.s3.amazonaws.com/i/zuv8m9qdovl2ngx838tq.png)\)

* Insert an element at the end of the list **\(Index == count\)**.
  * This is the same push method. When the list  is not empty.

![Insert an element at the end of the list ](https://thepracticaldev.s3.amazonaws.com/i/veqmu46l70tpja37ukbi.png)

* Insert an element at the middle of the list **\(Index == n\)**.
  * Adding an element in the middle of the list. First, need to loop through the list until we reach the desired position. In this case, we will loop to index -1, meaning one position before where we desire to insert a new node.
  * When we get out of the loop, the previous variable will be a reference to an element before the index where we would like to insert to new element and the current variable. So first, we link the node's next to current and also current's previous to the node, to change the link between previous and current. we need previous.next to the node and node's previous to the previous. 

![Insert an element at the middle of the list](https://thepracticaldev.s3.amazonaws.com/i/0zsgxj679cuu62htie9o.png)

```javascript
 insert(element, index) {
        if (index >= 0 && index <= this.count) {

            let node = new DoublyNode(element);
            let current = this.head; //1
            if (index == 0) {
                if (this.head == undefined) { //2
                    this.head = node; //3
                    this.tail = node; //4
                } else {
                    current.previous = node; //5
                    node.next = current;  //6
                    this.head = node;  //7
                }
            } else if (index == this.count) {
                current = this.tail;
                current.next = node;
                node.previous = current;
                this.tail = node;
            } else {
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = node;
                node.next = current;
                node.previous = previous;
                current.previous = node;
            }
            this.count++;
        }
    }
```

### RemoveAt

Remove an element at the specified index, we first check if the linked list is empty else return undefined \({1}\), After that we valid the index's out of bound error, by check is the index, greater than zero and less than count.there are three scenarios,

* Remove an element at the start of the list
  * Remove a node from the start, we just move the head node to head's next Node, To do that we first, define a current variable equal to head, set the head to the current.next.
  * If the list count is 1 then set the tail to undefined, as end-node points to tail, we need to unset it by setting tail to undefined, else we set head previous to undefined, we need to unlink the previous head node.

![Remove an element at the start of the list](https://thepracticaldev.s3.amazonaws.com/i/3nie9up1jdb1wehpu5ph.png)

* Remove an element at the end of the list

![Remove an element at the end of the list](https://thepracticaldev.s3.amazonaws.com/i/h7tlfwyey26t8ddz1ihx.png)

* Remove an element at the middle of the list 

![Remove an element at the middle of the list](https://thepracticaldev.s3.amazonaws.com/i/trkmb5qca6pyw9ckpjof.png)

```javascript
   removeAt(index) {
        if (this.isEmpty()) {
            return undefined;
        }
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index == 0) {
                this.head = current.next;
                if (this.count == 1) {
                    this.tail = undefined;
                }else{
                    this.head.previous = undefined;
                }
            }else if (index == this.count-1){
                current = this.tail;
                this.tail = current.previous;
                this.tail.next = undefined;
            }else{
                current = this.getElementAt(index);
                const previous = current.previous;
                // link previous with current's next
                previous.next = current.next;
                current.next.previous = previous;
            }
            this.count --;
            return current.element;
        }
    }
```

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/DoubleLinkedList.js)

## Difference between Single Listed List and Doubly Listed List

| Single Listed List | Doubly Listed List |
| :--- | :---: |
| Uses Less Memory | Takes 2x Memory |
| Simple Implementation | fairly hard Implementation |
| Cannot easily access the previous element | Can easily access the previous element using the previous property |

#### Conclusion :

| Methods | Complexity |
| :--- | :---: |
| insert at head | O\(1\) |
| insert at tail | O\(1\) |
| search an element | O\(n\) |
| remove head element | O\(1\) |
| remove any element\(removeAt\) | O\(n\) |

