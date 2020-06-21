# What is Set? 
> *Sets are a type of associative containers in which each element has to be unique because the value of the element identifies it. The value of the element cannot be modified once it is added to the set, though it is possible to remove and add the modified value of that element*  - [*geeksforgeeks*](https://www.geeksforgeeks.org/)

## List Of Operations Available  

* __Add__: Insert an element in the set if present not.
* __Delete__: Remove an element from the set. 
* __Has__ : Return *true* if the an element is present or else return *false*.
* __Size__: Return Size of the Set.
* __isEmpty__ : Check if the set is empty if empty return true else false.
* __Union__: Return new Set which contains all the elements from two sets.
* __Intersection__: Return new Set which contains the intersecting element from two sets.
* __Difference__: Return new Set only containing the elements which are not present in other sets.
* __isSubset__: Return true if all elements are present in the given otherSet.

>  __Set Only Contains Unique Elements in it.__

### Implementation of Set in Javascript 

Let start by defining an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) class name __Set__ that has one property, *items* which will hold the elements in the set.we are using objects to store elements in the set instead, you can also use an array.


```javascript
 class Set {
    constructor() {
        this.items = {};
    }
 }
```

## Add

While inserting an element into the Set, we first need to check if it already exists or not. By using __has__ a method.
1. if the element is already present 
    * Return false
2. Else insert an element into the Set.
    * Set items property key and value as an element.

```javascript
 add(element) {
    if (!this.has(element)) {
        this.items[element] = element;
        return true;
    }
    return false;
    }
```
## Has

Check if the element already exists in the set or not.
You can loop until the entire the items and compare the given element with the set elements. *If a match is found then return __true__ or else __false__.*
Or you can javascript built-in method of [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

```javascript
 has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, 
 element);
    }
```

## Delete
Remove an element from the set.
* Check if the element is already present
    * If not present return __false__.
    * Else __delete__ the element from the *items* property.
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
Return all elements present in the Set

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

> __Set__ Data Structure was also introduced in the ES6, javascript all the methods defined until know is present in Standard ES6 [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

# Set Operations

In mathematics, a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) also has some basic operations such as *union*, *intersection*, and *difference*.

## Union
The union of the sets A and B,  denoted by __A ∪ B__. It is set only contains *distinct elements* from set A or set B or both.

```
Eg :- 

Set A = {1,2,3,4,5,6}
Set B = {3,4,5,10}

A ∪ B = { 1,2,3,4,5,6,10 }

```

![Set Operation Union](https://dev-to-uploads.s3.amazonaws.com/i/wav5nevjooxh1ouitx39.png)

* otherSet Must be an Instance of Set if not throw an error.
* Define a new Union Set.
* Loop both the Sets and add elements into the Union Set if not present.

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
The intersection of the sets A and B, denoted by __A ∩ B__, is the Set of elements belongs to both A and B, only *common elements*.

```
Eg :- 

Set A = {1,2,3,4,5,6}
Set B = {3,4,5,10}

A ∩ B = {3,4,5 }

```

![Set Operation Intersection](https://dev-to-uploads.s3.amazonaws.com/i/ywj3tme2dnq04a2kjd8k.jpg)

* otherSet Must be an Instance of Set if not throw an error.
* Define a new Intersection Set.
* Loop the Set and add elements into the Intersection Set if and only if, the elements are present in both the Sets.

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
The difference between sets A and B is denoted by __A – B__. Only containing *elements of set A but not in B*.

```
Eg :- 

Set A = {1,2,3,4,5,6}
Set B = {3,4,5,10}

A – B = {1,2,6}

```

![Set Operation Difference](https://dev-to-uploads.s3.amazonaws.com/i/awhve9zscudal5fjun2u.png)

* otherSet Must be an Instance of Set if not throw an error.
* Define a new Difference Set.
* Loop the Set and add elements into the Difference Set which are not common in otherSet

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
A is a subset of B, denoted by __A ⊆ B__ or equivalently.if only if all the *elements of A is present in B*.


![Set Operation isSubset](https://dev-to-uploads.s3.amazonaws.com/i/h2uuenvu080xfevo6va7.jpg)

* otherSet Must be an Instance of Set if not throw an error.
* Loop the otherSet check if all the elements are present or not or use [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method.

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

