Hello Everyone, this is part 10 in the series of blogs about data structures and algorithms in JavaScript. In this blog, I will cover the Dictionary Data Structure.

# What is a Dictionary?
> *A dictionary is a general-purpose data structure for storing a group of objects. A dictionary has a set of keys and each key has a single associated value.* - *[Wikibooks](https://en.wikibooks.org/wiki/A-level_Computing/AQA/Paper_1/Fundamentals_of_data_structures/Dictionaries#:~:text=A%20dictionary%20is%20a%20general,has%20a%20single%20associated%20value.&text=Different%20languages%20enforce%20different%20type,often%20implemented%20as%20hash%20tables.)*


## List Of Operations Available  

* __set__: insert a new key-value pair in the dictionary.
* __get__: return the value if the key is present.
* __remove__: remove key-value pair from the dictionary if present.
* __hasKey__: check if the key exists for not.
* __keys__: return all the keys in the dictionary. 
* __values__: return all the values in the dictionary. 
* __keyValues__ : return an array containing all the pairs.
* __forEach__:  takes callback function to perform an operation on each pair.

> *A dictionary is also known as a map,symbol table, and an associative array*


### Implementation of Dictionary in Javascript 

We start by defining a class, __Dictionary__ with property __*table*__.
Property table will javascript object which will holds items in it.
In a  dictionary,  the ideal would be to store keys of type string and any type of value (from primitive type such as numbers, a string, to complex objects). However, because JavaScript is not strongly typed, we cannot guarantee the key will be a string .i.e,
> We first transform the key whatever object is passed as the key into a string to make it easier to search and retrieve values from the Dictionary class.


```javascript 
    class Dictionary {
    constructor(toStrFn = toStringFunc) {
        this.table = {};
        this.toStrFn = toStrFn;
        }
    }
```

## Set
When inserting a key-value pair, we will check if the key & value is not null. else : 
* Stringify the key using the default string method
* Create a new instance of KeyPair.
* Add the stringify value as the key and value as the instance of Keypair.

```javascript 
    set(key, value) {
        if (key != null & value != null) {
            const stringKey = this.toStrFn(key);
            this.table[stringKey] = new KeyValue(key, value);
            return true;
        }
        return false;
    }
```
## HasKey
To check if the key is present or not, We will Stringify the key and check if its present or not.

```javascript 

    hasKey(key) {
        return this.table[this.toStrFn(key)] !== null;
    }
``` 
## Remove
When removing a key-value pair, We will check if the key is present in the Dictionary using the HasKey method. If present then deletes the key-value pair.
```javascript 
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
``` 
## get

```javascript 

    get(key) {
        const keyValuesPair = this.table[this.toStrFn(key)];
        return keyValuesPair != null ? keyValuesPair.value : null;
    }
```
## KeyValues

```javascript 
    keyValues() {
        const keyValuePairs = [];
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                keyValuePairs.push(this.table[key])
            }
        }
        return keyValuePairs;
    }
```

## Keys

```javascript 

    keys() {
        return this.keyValues().map(element => element.key);
    }
```
## Values

```javascript 

    values() {
        return this.keyValues().map(element => element.value);
    }
```


## ForEach 

```javascript 
    forEach(callback) {
        let keyValuePairs = this.keyValues();
        for (let index = 0; index < keyValuePairs.length; index++) {
            const result = callback(keyValuePairs[index].key, keyValuePairs[index].value);
            if (result == false) {
                break;
            }

        }
    }
```

you get the full source [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Dictionary.js)



### Conclusion : 


| Methods       | Complexity    |
| ------------- |:-------------:| 
| set           | O(n)          | 
| get           | O(1)          |  
| remove        | O(1)          | 
| keys          | O(n)          | 
| values        | O(n)          | 
| KeyValues     | O(n)          | 
| forEach       | O(n)          | 


