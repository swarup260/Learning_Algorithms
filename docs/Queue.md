## What is the Queue?

>*A Queue is a linear structure which follows a particular order in which the operations are performed. The order is __FIFO__(First In First Out)* 
-geeksforgeeks.org

*A real-world example of a queue can be people standing at the bus stop where the first standing in the line will be the first person to get out of the line i.e. first in first out. If you compared it to a [__stack__](https://dev.to/swarup260/data-structures-algorithms-in-javascript-stack-1ilb), the last person will be the first to leave.*

This article will go through a list of following Queue DS,
* Queue.
* Deque(Double-ended queue).

## List Of Operations Available  

* __Enqueue__   : Insert an element at the end of the queue.
* __Dequeue__    : Remove an element from the front of the queue. 
* __Front__    : Return the first element of the queue.
* __Size__    : Return Size of the queue.
* __isEmpty__ : Check if the queue is empty if empty return true else false.
* __Clear__   : Reset the queue.

### Implementation of Queue in Javascript 

let's define __ES6__ class name __*Queue*__, with properties, *count* which will keep track of the number of elements in the queue and *items* object which will store the elements. since we will be removing elements from the front of the queue, we also need a variable to help us track the first element. For this purpose, we declare the *lowestCount* variable

```javascript

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}

```
#### __Enqueue__

Insert an element in the queue is same as the [push](https://dev.to/swarup260/data-structures-algorithms-in-javascript-stack-1ilb#push) method of the stack or as Array *push* method. 

```javascript

 enqueue(element){
         this.items[this.count] = element;
         this.count ++;
     }

```

#### __Dequeue__ 
To remove an element from the __Queue__, we first check if the Queue is empty if empty return *undefined* else store the *lowestCount* property element in a variable, To return the element after deletion, Delete the *lowestCount* item & increment the count by one. Dequeue method is same as the Array *shift* method which removes the first element.
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

#### __Front__
This method will return the item from the front of the queue (using the *lowestCount* as a key to retrieve the element value)

```javascript

   front(){
         if (this.isEmpty()) {
             return undefined;
         }
         return this.items[this.lowestCount];

     }
```

#### __Size__
This method will return the size of the queue which is *count* minus the *lowestCount*.

```javascript

size() {
        return this.count - this.lowestCount;
    }
```
Example:-In the below queue items object, If the zeroth element was removed from the front of the queue, the lowest count will be one. The total count of the element will be  two, therefore, the size of the queue will count-lowest count

```javascript

let queue = {
   1: "1",
   2: "2",
}

```


#### __isEmpty__ 
__isEmpty__ will return true if the queue is empty.

```javascript

 isEmpty() {
         return this.size() === 0;
    }
```

#### __Clear__ 

To __clear__ all the elements from the queue, we can evoke the dequeue method until it returns undefined or we can simply reset the value of the Queue class properties to the same values as declared in its constructor

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



| Methods       | Complexity    |
| ------------- |:-------------:| 
| equeue        | O(1)          | 
| dequeue       | O(1)          |  
| front         | O(1)          | 
| size          | O(1)          | 