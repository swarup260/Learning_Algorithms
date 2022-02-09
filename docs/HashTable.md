**Hash Table**. is a widely used data structure for its faster lookup. Like Arrays where data is stored in an indexed structure, whereas hashtable use hash mapped layout.

So, in general, it consists of two things :

- Table: holds the data in an array or an object.
- Hash function: To calculate the hash for the elements in the hash table.

## What is Hash Table?

> _A Hash table (*hash map*) is a data structure that implements an associative array abstract data type, a structure that can map keys to value. A hash table uses a hash function to compute an *index*, also called a *hash code*, into an array of *buckets* or *slots*, from which the desired value can be found._ - [wikipedia](https://en.wikipedia.org/wiki/Hash_table#:~:text=In%20computing%2C%20a%20hash%20table,desired%20value%20can%20be%20found)

## What is Hash Function?

> *A hash function is any function that can be used to map a data set of arbitrary size to a data set of a fixed size, which falls into the hash table. The values returned by a hash function are called hash values, hash codes, hash sums, or simply hashes.* - [wikipedia](https://en.wikipedia.org/wiki/Hash_function)

Different of Hash Function :
- djb2
- loose loose
- sdbm

for more information [here](http://www.cse.yorku.ca/~oz/hash.html).

List of Available Methods : 

- **put**: Insert an element (it can also update)
- **remove**: Remove an element
- **get**:  Get the inserted element

## Implementation of Hash Table in JavaScript

if you just want the source code find [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/HashTable.js).

So, let’s started with defining a class ES6 HashTable; It will be the same as [Dictionary](https://dev.to/swarup260/data-structures-algorithms-in-javascript-dictionary-3b7f).

```javascript

class HashTable {
    constructor() {
        this.table = {};
    }
}

```

## Hash Function

we will use the lose lose hash function, but you can use  any of the above hash function 

1. If its a number return number  
2. If it's not a number then, stringify the key add up all the char with its ASCII value, we can use [charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) and divide it with an arbitrary number to work with lower numbers.

```javascript
    _loseloseHashCode(key) {
        if (typeof key == "number") {
            return key;
        }
        const keyString = toStringFunc(key);
        let code = 0;
        for (let index = 0; keyString < key.length; index++) {
            code += keyString.charCodeAt(index);
        }
        return code % 37;
    }
```

Before implementing other methods, I want to clarify the differences between a **HashMap** and **HashSet**. HashMap behavior is more like a Map or dictionary, whereas elements are hash and stored as key-value pairs. In HashSet is stored as Set. more information visited here [here](https://www.javatpoint.com/difference-between-hashset-and-hashmap) or [here](https://www.geeksforgeeks.org/difference-between-hashmap-and-hashset/).But in this article ,I will explain using hashmap.

## Put

1. Check whether the  keys and value in not NULL if yes return false.
2. If key and value is not null then calculate the hash using the above hash function method.
3. Set the table property's key as a hash value and value as key-value pairs same as [KeyValue class](https://dev.to/swarup260/data-structures-algorithms-in-javascript-dictionary-3b7f) of dictionary.

```javascript
    put(key, value) {
        if (key != null && value != null) {
            const keyHash = this.getHashCode(key);
            this.table[keyHash] = new KeyValue(key, value);
            return true;
        }
        return false;
    }
```

## Remove

1. Calculate the hash using the above hash function method.
2. Check whether the element with the key is present in the table property if not return undefined.
3. If it's present delete the key in the table.

```javascript
    remove(key) {
        const keyHash = this.getHashCode(key);
        if (this.table[keyHash]) {
            const value = this.table[keyHash];
            delete this.table[keyHash];
            return value;
        }
        return undefined;
    }
```

## Get

1. Calculate the hash using the above hash function method.
2. Check whether the element with the key is present in the table property if not return undefined.

```javascript
    get(key) {
        const keyHash = this.getHashCode(key);
        return this.table[keyHash] != null ? this.table[keyHash].value : undefined;
    }
```

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/HashTable.js).

So, in an ideal case, the Hash function always produces a different hash for any given key.

Eg:  Let say , we want to store the list of email address against its name 

```
dave : dave@gmail.com 

john : john@gmail.com 
```
so its hash value will be **dave: 9** and **john:24** use above hash function.
But that's not the case, it may produce the same set of the hash value for two or more keys. This phenomenon is also known as **Collision** or **Hash collision**.

Eg:  Now, for 
```
nathan: nathan@gmail.com

sargeras: sargeras@gmail.com
```

![Hash collision](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4nnsbvf7w2qu0v74nl5d.png)
                 _Fig: Hash Collision in Hashtable_

for both the hash value will be 5 respectively use above hash function.

What is Hash Collision?

> *In computer science a **hash collision** or clash is when two pieces of data in a hash table share the same hash value. The hash value, in this case, is derived from a hash function that takes a data input and returns a fixed length of bits* - [wikipedia](https://en.wikipedia.org/wiki/Hash_collision#:~:text=In%20computer%20science%2C%20a%20hash,a%20fixed%20length%20of%20bits.&text=Malicious%20users%20can%20take%20advantage,%2C%20access%2C%20or%20alter%20data)

They are various methods to resolve hash collision : 

- **Open Addressing**
    - Some types of probing are [linear probing](https://en.wikipedia.org/wiki/Linear_probing), [double hashing](https://en.wikipedia.org/wiki/Double_hashing), and [quadratic probing](https://en.wikipedia.org/wiki/Quadratic_probing)
- **Separate Chaining**
- **Cache-Conscious Collision Resolution**

I will explain in detail in my next blogs.

## Conclusion

| Algorithm     | Average       | Worst case     |
| ------------- |:-------------:| :-------------:| 
| Space         | O(n)          |  O(n)          | 
| Search        | O(1)          |  O(n)          |
| Insert/Put    | O(1)          |  O(n)          | 
| Delete/Remove | O(1)          |  O(n)          | 