# Queue

## What is the Queue?

> _A Queue is a linear structure which follows a particular order in which the operations are performed. The order is **FIFO**\(First In First Out\)_ -geeksforgeeks.org

_A real-world example of a queue can be people standing at the bus stop where the first standing in the line will be the first person to get out of the line i.e. first in first out. If you compared it to a_ [_**stack**_](https://dev.to/swarup260/data-structures-algorithms-in-javascript-stack-1ilb)_, the last person will be the first to leave._

This article will go through a list of following Queue DS,

* Queue.
* Deque\(Double-ended queue\).

## List Of Operations Available

* **Enqueue**   : Insert an element at the end of the queue.
* **Dequeue**    : Remove an element from the front of the queue. 
* **Front**    : Return the first element of the queue.
* **Size**    : Return Size of the queue.
* **isEmpty** : Check if the queue is empty if empty return true else false.
* **Clear**   : Reset the queue.

### Implementation of Queue in Javascript

let's define **ES6** class name _**Queue**_, with properties, _count_ which will keep track of the number of elements in the queue and _items_ object which will store the elements. since we will be removing elements from the front of the queue, we also need a variable to help us track the first element. For this purpose, we declare the _lowestCount_ variable

```javascript
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}
```

#### **Enqueue**

Insert an element in the queue is same as the [push](https://dev.to/swarup260/data-structures-algorithms-in-javascript-stack-1ilb#push) method of the stack or as Array _push_ method.

```javascript
 enqueue(element){
         this.items[this.count] = element;
         this.count ++;
     }
```

#### **Dequeue**

To remove an element from the **Queue**, we first check if the Queue is empty if empty return _undefined_ else store the _lowestCount_ property element in a variable, To return the element after deletion, Delete the _lowestCount_ item & increment the count by one. Dequeue method is same as the Array _shift_ method which removes the first element.

```javascript
   dequeue(){
         if (this.isEmpty()) {
             return undefined;
         }
         let result = this.items[this.lowestCount]; 
         delete this.items[this.lowestCount]; 
         this.lowestCount ++; 
         return result; 

     }
```

#### **Front**

This method will return the item from the front of the queue \(using the _lowestCount_ as a key to retrieve the element value\)

```javascript
   front(){
         if (this.isEmpty()) {
             return undefined;
         }
         return this.items[this.lowestCount];

     }
```

#### **Size**

This method will return the size of the queue which is _count_ minus the _lowestCount_.

```javascript
size() {
        return this.count - this.lowestCount;
    }
```

Example:-In the below queue items object, If the zeroth element was removed from the front of the queue, the lowest count will be one. The total count of the element will be two, therefore, the size of the queue will count-lowest count

```javascript
let queue = {
   1: "1",
   2: "2",
}
```

#### **isEmpty**

**isEmpty** will return true if the queue is empty.

```javascript
 isEmpty() {
         return this.size() === 0;
    }
```

#### **Clear**

To **clear** all the elements from the queue, we can evoke the dequeue method until it returns undefined or we can simply reset the value of the Queue class properties to the same values as declared in its constructor

```javascript
 clear() {
    this.items = {}
    this.count = 0;
    this.lowestCount = 0;
    return this.items;
    }
```

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Queue.js)

### Conclusion :

| Methods | Complexity |
| :--- | :---: |
| equeue | O\(1\) |
| dequeue | O\(1\) |
| front | O\(1\) |
| size | O\(1\) |

