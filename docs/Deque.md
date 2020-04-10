## What is Deque?

>*In computer science, a double-ended queue __(Deque)__ is an abstract data type that generalizes a Queue, for which elements can be added to or removed from either the front (head) or back (tail)*  - Wikipedia

## List Of Operations Available  

* __AddFront__    : Insert an element at the front of the Deque.
* __AddBack__     : Insert an element at the back of the  Deque.
* __RemoveFront__    : Remove an element from front.
* __RemoveBack__    : Remove an element from the back.
* __PeekBack__    :  This method returns the first element of the Deque same as *__queue__* [front](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#front) method.
* __PeekFront__    : This method returns the end element of the  Deque same as *__stack__* [peek](https://dev.to/swarup260/data-structures-algorithms-in-javascript-stack-1ilb#peek) method.
* __Size__    : Return Size of the deque.
* __isEmpty__ : Check if the Deque is empty if empty return true else false.
* __Clear__   : Reset the Deque.

## Implementation of Deque in Javascript 

Deque class is similar to [__queue__](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#queue). 

```javascript

class Deque {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}

```
#### __AddBack__ 

Deque *addback* method is similar to queue's [enqueue](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#enqueue) method. 

```javascript

addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

```

#### __AddFront__ 


When adding an element at the front Deque, There are three scenarios,
1. If the Deque is Empty then same as addBack method ({1})
2. When an element is removed from the front of the Deque ({2}),lowestCount will 
   be  greater > zero,
    * Then decrement the *count* 
    * Assign the element to that object key.
3. If the lowestCount is equal to zero then, we need to shift the element by   one position right and free the first position and assign the element to that object key ({3})


```javascript

  addFront(element) {
        if (this.isEmpty()) {             //1
            this.addBack(element);
        } else if (this.lowestCount  > 0) {    //2
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {                                //3
            for (let index = this.count; index > 0; index--) {
                this.items[index] =  this.items[index -1];
            }
            this.count ++;
            this.items[0] = element;
        }
     return true;
    }

```
>For removing an element from the Deque, we first need to check, if the Deque is not Empty else return *undefined*. 




#### __RemoveFront__
While an element from the front of the Deque is as [*dequeue*](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#dequeue) method of Queue


```javascript

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }
```

#### __RemoveBack__
While an element from the back of the Deque is as [*pop*](https://dev.to/swarup260/data-structures-algorithms-in-javascript-stack-1ilb#pop) method of the Stack

```javascript

   removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }
```

__[size](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#size),[clear](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#clear),[isEmpty](https://dev.to/swarup260/data-structures-algorithms-in-javascript-queue-59al#isempty)__ will be same as queue methods

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Dequeue.js)

### Conclusion : 



| Methods       | Complexity     |
| ------------- |:-------------: | 
| addback        | O(1)          | 
| addfront       | O(1)          |
| removeFront    | O(1)          |  
| removeBack     | O(1)          |  