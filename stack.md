# Stack

## What is Stack?

> _Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be **LIFO**\(Last In First Out\) or **FILO**\(First In Last Out\)._ - geeksforgeeks.org

_Real World eg. of the stack can be a pile of books, where books are placed one above another, books can be added or remove from the top of the pile of books_

## List Of Operations Available

* **Push**    : Insert an element in the stack.
* **Pop**     : Remove an element in the stack.
* **Peek**    : Return the top element of the stack.
* **Size**    : Return Size of the stack.
* **isEmpty** : Check if the stack is empty if empty return true else false.
* **Clear**   : Reset the stack.

## Implementation of Stack in Javascript

There are two ways in which stack can implement in javascript one way by using Array or using javascript object\( object is a set of key & value\).As Array already have _push_ method to insert an element at end of the array, _pop_ method to remove an element, to get the length of the array it has a property _length_ which returns the size of the array if the length is equal to zero then the array is empty. you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Stack.js)

### Implementation of Stack using Javascript Objects

let's define **ES6 class** name Stack, with two properties, _count_ which will keep track of the number of elements in the stack and _items_ an object which will store the elements as value and count as key.

```javascript
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
}
```

#### **Push**

To add an element to the stack we will use the count property as key for the _items_ object & element as values. After pushing the element in the stack we will increment the _count_ property by one.**we can only add new items to the top of the stack, meaning at the end of the stack**

```javascript
 push(element) {
        this.items[this.count] = element;
        this.count++;
    }
```

#### **Pop**

While removing an element from the stack, there two cases: 1. If the stack is empty, return **undefined** 2. If the stack is not empty

* Store the value of the top element i.e _\(count -1\)_
* decrease the _count_ property by one
* delete element from _items_ object and return the stored value.

**As the stack uses the LIFO principle, the last item that we added is the one that is removed**

```javascript
   pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count-1];
        this.count --;
        delete this.items[this.count];

        return result;
    }
```

#### **Peek**

If the stack is empty, return **undefined** else return the **Top**element i.e _\(count -1\)_

```javascript
  peek() {

        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count-1];
    }
```

#### **Size**

Return _count_ property, which keeps track of the number of elements in the stack.

```javascript
size() {
        return this.count;
    }
```

#### **isEmpty** & **Clear**

isEmpty return **boolean value**, if the _count_ property is zero then true else false. And to clear the stack, we can simply reset it to the same values we used in the constructor.

```javascript
 isEmpty() {
        return this.count == 0;
    }

 clear() {
    this.items = {};
    this.count = 0;
    return this.items;
    }
```

We could also use the following logic to remove all elements from the stack, respecting the LIFO behavior:

```javascript
while (!this.isEmpty()) {
this.pop();
}
```

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Stack.js)

### Conclusion :

Stacks have a variety of applications in real-world problems. They can be used for backtracking problems to remember tasks or paths visited, and to undo actions. Complexity of stack is methods as follows.

| Methods | Complexity |
| :--- | :---: |
| pop | O\(1\) |
| push | O\(1\) |
| peek | O\(1\) |

