# What is Sorted linked list?
>*A sorted linked list is a list that keeps its elements sorted. To keep all elements sorted, instead of applying a sorting algorithm.* - Learning JavaScript Data Structures and Algorithms Third Edition



## List Of Operations Available
* All methods will same as the  __[single linked list](./SingleLinkedList.md)__ . we will only overwrite the insert method.
.

## Implementation of Sorted linked list in Javascript

The SortedLinkedList class does not need and additional properties, so we can simply extend the LinkedList Class, only overwrite the required methods.

```javascript
  class SortedLinkedList extends LinkedList {
    constructor(func, CompareFun = defaultCompare){
        super(func);
        this.CompareFun = CompareFun;
    }
} 
  
```

# Insert


While Insert an element in SortedLinkedList, There are two scenarios:-

1. __*SortedLinkedList is Empty*__ 
 * Called Parent [Insert Method](./SingleLinkedList.md#Insert) and set the index to zero.
  
2. __*SortedLinkedList is Not Empty*__ 
 * Get the Next Sorted Position/Index using the getNextSortIndex method. 
 * Called Parent [Insert Method](./SingleLinkedList.md#Insert) and set the index to Next Sorted Position. 

```javascript
    insert(element, index =0){
        if (this.isEmpty()) {
            return super.insert(element,index)
        }else{#
            const pos = getNextSortIndex(element);
            return super.insert(element,pos);
        }
    }

```
# GetNextSortIndex

**This method returns the sorted index by iteratively comparing the element with the linked list's nodes or until all nodes have been iterated.**

```javascript

    getNextSortIndex(element){
        let current = this.head;
        let i = 0;
        for (; i < current.next != null ; i++) {
            if (this.CompareFun(element,current.element) == Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }

```
you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/SortedLinkedList.js)

# Conclusion 
The complexity of the Sorted Linked List will be the same as Single Linked List. 

