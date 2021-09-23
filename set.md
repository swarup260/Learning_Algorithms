# Set

## What is Set?

> _Sets are a type of associative containers in which each element has to be unique because the value of the element identifies it. The value of the element cannot be modified once it is added to the set, though it is possible to remove and add the modified value of that element_ - [_geeksforgeeks_](https://www.geeksforgeeks.org/)

### List Of Operations Available

* **Add**: Insert an element in the set if present not.
* **Delete**: Remove an element from the set. 
* **Has** : Return _true_ if the an element is present or else return _false_.
* **Size**: Return Size of the Set.
* **isEmpty** : Check if the set is empty if empty return true else false.
* **Union**: Return new Set which contains all the elements from two sets.
* **Intersection**: Return new Set which contains the intersecting element from two sets.
* **Difference**: Return new Set only containing the elements which are not present in other sets.
* **isSubset**: Return true if all elements are present in the given otherSet.

> **Set Only Contains Unique Elements in it.**

#### Implementation of Set in Javascript

Let start by defining an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) class name **Set** that has one property, _items_ which will hold the elements in the set.we are using objects to store elements in the set instead, you can also use an array.

```javascript
 class Set {
    constructor() {
        this.items = {};
    }
 }
```

### Add

While inserting an element into the Set, we first need to check if it already exists or not. By using **has** a method. 1. if the element is already present

* Return false
  1. Else insert an element into the Set.
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

### Has

Check if the element already exists in the set or not. You can loop until the entire the items and compare the given element with the set elements. _If a match is found then return **true** or else **false**._ Or you can javascript built-in method of [Object.prototype.hasOwnProperty\(\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

```javascript
 has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, 
 element);
    }
```

### Delete

Remove an element from the set.

* Check if the element is already present

  * If not present return **false**.
  * Else **delete** the element from the _items_ property.

    \`\`\`javascript

  delete\(element\) { if \(this.has\(element\)\) { delete this.items\[element\]; return true; } return false; }

```text
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

> **Set** Data Structure was also introduced in the ES6, javascript all the methods defined until know is present in Standard ES6 [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

## Set Operations

In mathematics, a \[set\]\([https://en.wikipedia.org/wiki/Set\_\(mathematics](https://en.wikipedia.org/wiki/Set_%28mathematics)\)\) also has some basic operations such as _union_, _intersection_, and _difference_.

### Union

The union of the sets A and B, denoted by **A ∪ B**. It is set only contains _distinct elements_ from set A or set B or both.

```text
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

### Intersection

The intersection of the sets A and B, denoted by **A ∩ B**, is the Set of elements belongs to both A and B, only _common elements_.

```text
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

### Difference

The difference between sets A and B is denoted by **A – B**. Only containing _elements of set A but not in B_.

```text
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

### isSubset

A is a subset of B, denoted by **A ⊆ B** or equivalently.if only if all the _elements of A is present in B_.

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

#### Conclusion :

| Methods | Complexity |
| :--- | :---: |
| Add | O\(n\) |
| Delete | O\(1\) |
| Has | O\(n\) |

