## What is Stack?

>*Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be __LIFO__(Last In First Out) or __FILO__(First In Last Out).*  - geeksforgeeks.org

*Real World eg. of the stack can be a pile of books, where books are placed one above another, books can be added or remove from the top of the pile of books*

## List Of Operations Available  

* __Push__    : Insert an element in the stack.
* __Pop__     : Remove an element in the stack.
* __Peek__    : Return the top element of the stack.
* __Size__    : Return Size of the stack.
* __isEmpty__ : Check if the stack is empty if empty return true else false.
* __Clear__   : Reset the stack.

## Implementation of Stack in Javascript 

There are two ways in which stack can implement in javascript one way by using Array or using javascript object( object is a set of key & value).As  Array already have *push* method to insert an element at end of the array,  *pop* method to remove an element, to get the length of the array it has a property *length* which returns the size of the array if the length is equal to zero then the array is empty. you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Stack.js)

### Implementation of Stack using Javascript Objects

let's define __ES6 class__ name Stack, with two properties, *count* which will keep track of the number of elements in the stack and *items* an object which will store the elements as value and count as key.

```javascript

class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
}

```
#### __Push__ 

To add an element to the stack we will use the count property as key for the *items* object & element as values. After pushing the element in the stack we will increment the *count* property by one.__we can only add new items to the top of the stack, meaning at the end of the stack__

```javascript

 push(element) {
        this.items[this.count] = element;
        this.count++;
    }

```

#### __Pop__ 

While removing an element from the stack, there two cases:
1. If the stack is empty, return __undefined__
2. If the stack is not empty
    * Store the value of the top element i.e *(count -1)*
    * decrease the *count* property by one
    * delete element from *items* object and return the stored value.

__As the stack uses the LIFO principle, the last item that we added is the one that is removed__

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

#### __Peek__

If the stack is empty, return __undefined__ else return the __Top__element i.e *(count -1)* 

```javascript

  peek() {

        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count-1];
    }
```


#### __Size__

Return *count* property, which keeps track of the number of elements in the stack.

```javascript

size() {
        return this.count;
    }
```

#### __isEmpty__ & __Clear__ 

isEmpty return __boolean value__, if the *count* property is zero then true else false. And to clear the stack, we can simply reset it to the same values we used in the constructor.

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
We could also use the following logic to remove all elements from the stack,
respecting the LIFO behavior:
```javascript
while (!this.isEmpty()) {
this.pop();
}
```
you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Stack.js)
### Conclusion : 

Stacks have a variety of applications in real-world problems. They can be used for backtracking problems to remember tasks or paths visited, and to undo actions. Complexity of stack is methods as follows.

| Methods       | Complexity    |
| ------------- |:-------------:| 
| pop           | O(1)          | 
| push          | O(1)          |  
| peek          | O(1)          | 