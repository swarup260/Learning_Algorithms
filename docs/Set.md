Hello Everyone, this is part 9 in the series of blogs about data structures and algorithms in JavaScript, In this blog, I will cover Set.

# What is Set ? 
> *Sets are a type of associative containers in which each element has to be unique, because the value of the element identifies it. The value of the element cannot be modified once it is added to the set, though it is possible to remove and add the modified value of that element*  - [*geeksforgeeks*](https://www.geeksforgeeks.org/)

## List Of Operations Available  

* __Add__: Insert an element in the set if present not.
* __Delete__: Remove an element from the set. 
* __Has__ : Return *true* if the an element is present or else return *false*.
* __Size__ : Return Size of the Set.
* __isEmpty__ : Check if the set is empty if empty return true else false.
* __Intersection__: Return new Set which contains the intersecting element from two sets.
* __Union__: Return new Set which contains all the elements from two sets.
* __Difference__: Return new Set only containing the elements which are not present in other sets.

>  __Set Only Contains Unique Elements in it.__
### Implementation of Set in Javascript 

Let start by defining an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) class name __Set__ that has one property, items that will hold the elements in the set.we are using objects to store elements in the set instead, you can also use an array.


```javascript
class Set {
    constructor() {
        this.items = {};
    }
}
```
## Has

```javascript
has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
```
## Add

```javascript
add(element) {
    if (!this.has(element)) {
        this.items[element] = element;
        return true;
    }
    return false;
    }
```
## Delete

```javascript

delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

```
## Elements

```javascript
elements(){
        let elements = [];
        for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                elements.push(key);
            }
        }
        return elements;
    }
```


ES6 Sets
===

## Union

```javascript
union(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const unionSet = new Set();
        this.elements().forEach(element => {
            unionSet.add(element);
        });
        otherSet.elements().forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
        
    }
```


## Intersection

```javascript
  intersection(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const intersectionSet = new Set();
        this.elements().forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        
        return intersectionSet;
    }
```
## Difference

```javascript
difference(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const differenceSet = new Set();
        this.elements().forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }
```
## isSubset

```javascript
isSubset(otherSet){
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        if (!(otherSet.size() > this.size())) {
            return false;
        }
        let isSubset  = true;
        this.elements().every(element => {
            if (!otherSet.has(element)) {
                isSubset = false;
                return;
            }
        });

        return isSubset;

    }
```


you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Set.js)



### Conclusion : 


| Methods       | Complexity    |
| ------------- |:-------------:| 
| Add           | O(n)          | 
| Delete        | O(1)          |  
| Has           | O(n)          | 