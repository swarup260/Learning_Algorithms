# Single Linked List

> _A linked list consists of nodes where each node contains a data field and a reference\(link\) to the next node in the list._ - geeksforgeeks.org

![Linked List](https://res.cloudinary.com/practicaldev/image/fetch/s--_PwtVEkJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.educative.io/api/edpresso/shot/5077575695073280/image/5192456339456000)

## List Of Operations Available

* **Push**: Insert an element at the end of the linked list.
* **Insert**: Insert an element at the given index of the linked list.
* **Remove**: Remove the end element of the linked list.
* **RemoveAt**: Remove the element at the given index of the linked list. 
* **GetElementAt**: Get the element at the given index of the linked list. 
* **IndexOf**: Return the index of the element in the linked list. 

## Implementation of linked list in Javascript

Let us define the ES6 class Node, with two properties _data_ and _next_, data property will hold, the data which we will insert in the linked list and next property will hold, the pointer to the next **Node**. A Linked List is just a chain of Node linked to each other by next pointer. **What's a pointer?** _A pointer points to the next member of the list, as you see in the above image_.

```javascript
 class Node {
     constructor(element){
         this.element = element;
         this.next = null;
     }
 }
```

Now, Let's define the ES6 class linked list with three properties, _count_ to track the number elements in the linked list. the _head_ which will always point to the starting node of the linked list but initially it will be **undefined** and _equalFun_ to compare two nodes in the linked list . **In a single Linked list, we only have a reference to the head node. So to traverse the linked list we always start with the head and walk through it. So, subsequent method we will always start with head.**

```javascript
class LinkedList {
    constructor(func) {
        this.count = 0;
        this.head = undefined;
        this.equalFunc = func || defaultEq;
    }
}
```

### Push

When adding an element at the end of the linked list, there can be two scenarios:

* When the head is **undefined** i.e linked list is empty. 
* When the linked list is not empty we need to append at the end.

First, we create a Node passing element as its value if the head is undefined then assign head to the node **\({1}\)** else ,we will define a _current_ variable equal to head and loop until we reach the end of the linked list i.e when node's next is null **\({2}\)** and assign the end Node's next to the node **\({3}\)**, after adding an element will always increment the count variable **\({4}\)**.

```javascript
push(element) {
        const node = new Node(element);
        let current = this.head;
        if (this.head == undefined) {
            this.head = node;  //1
        }else{
            while (current.next != null) { //2
                current = current.next
            }
            current.next = node; //3
        }
        this.count++ //4;
        return;
    }
```

### GetElementAt

To get an element by its **index** we will first define a variable _node_, referring to **head** **\({1}\)**, we valid the index's out of bound error, by check is the index, greater than zero and less than count. **\({2}\)**; if not then return **undefined** **\({5}\)**, Now, iterate over the linked list starting from 0 to the index and **\({3}\)**, return the _node_ **\({4}\)**. This method will be very useful in insert and remove an element from any position in the linked list.

```javascript
  getElementAt(index) {
        let node = this.head; // 1
        if (index >= 0 && index < this.count) { //2
            for (let i = 0; i < index; i++) { //3
                node = node.next;
            }
            return node; //4
        }
        return undefined; //5
    }
```

### Insert

Insert an element at a given the position; the index must be greater than zero and less than and equal to count, there are two scenarios, we will first define a variable node which refers to the head.

* _**index** is equal to zero_ **\({1}\)**
  * check if the head is undefined or not
    * if undefined than head equal to the node
    * else change the head node to the new node and node's next to the previous head.

![Insert element at zero index](https://thepracticaldev.s3.amazonaws.com/i/vp3za0jbztn5tmukevwr.png)

* _**index** is greater than zero_ **\({2}\)**
  * adding an element in the middle or at the end of the list. First, need to loop through the list until we reach the desired position. In this case, we will loop to index -1, meaning one position before where we desire to insert a new node
  * When we get out of the loop, the _previous_ variable will be reference to an element before the index where we would like to insert to new element, and the _current_ variable .
  * So , first we link the node's _next_ to _current_ and then change the link between _previous_ and current. we need _previous.next_ to the node. 

![Insert element at any index](https://thepracticaldev.s3.amazonaws.com/i/kbtmyg5cnoswcjhok0so.png)

```javascript
insert(element, postion) {
        if (postion >= 0 && postion <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (postion == 0) { //1
                if (this.head == undefined) {
                    this.head = node;
                }
                this.head = node;
                node.next = current;
            } else {  
                let previous = this.getElementAt(postion - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
         this.count++;
        }
    }
```

### IndexOf

This method will return the _index_ of the given element if exists else return **-1** **\({4}\)** . To find the _index_ of the element, we will start with the head element **\({1}\)** and loop until the element is found **\({2}\)** and returns its index **\({3}\)** .

```javascript
indexOf(element) {
        let current = this.head; //1
        for (let index = 0; index < this.count && current != null; index++) {
            if (current.element == element) { //2
                return index;
            }
            current = current.next; //3
        }
        return -1; //4
    }
```

### RemoveAt

Remove an element at the specified index, we first check if the linked list is _empty_ else return undefined **\({1}\)** ,After that we valid the index's out of bound error, by check is the index, greater than zero and less than _count_.

* We want to remove the first element i.e index equal to zero **\({2}\)**, shift the head to the next node. We will refer to the first element of the list using the current variable. If we assign head to current's next, we will remove the first element **\({3}\)**.

![Remove head node from linked list](https://thepracticaldev.s3.amazonaws.com/i/ux4jidvxkcyjaxuwnkko.png)

* We want to remove the last element or an element from the linked list, we will use _getElementAt_ method to get the one previous element using index -1 **\({4}\)**, current will be previous's next **\({5}\)**. So, to remove the current node, all we have do is to link the **previous.next** to **current.next** **\({6}\)**. 

![Remove any node from linked list](https://thepracticaldev.s3.amazonaws.com/i/2hgu2y8ddygea8o45413.png)

```javascript
removeAt(index) {
        if (this.isEmpty()) {
            return undefined; //1
        }        
        if (index >= 0 && index < this.count) {

            let current = this.head
            if (index == 0) { // 2
                this.head = current.next;  //3 
            } else {
                let previous = this.getElementAt(index - 1);  //4               
                current = previous.next; //5
                previous.next = current.next; //6
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
```

### Remove

To remove an element, we check if the linked list is not empty. If not then get the index of the element using the _indexOf_ method if the index is **-1** then the element doesn't exist else use the index and remove the element from the linked list using _removeAt_ method.

```javascript
remove(element) {
        if (this.isEmpty()) {
            return undefined;
        }
        let index = this.indexOf(element);
        if (index != -1) {
            this.removeAt(index);
        }
        return undefined;
    }
```

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/LinkedList.js)

### Conclusion :

| Methods | Complexity |
| :--- | :---: |
| insert at any position | O\(n\) |
| insert at head | O\(1\) |
| GetElementAt | O\(n\) |
| indexOf | O\(n\) |
| remove head element | O\(1\) |
| remove any element\(removeAt\) | O\(n\) |

