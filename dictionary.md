# Dictionary

> _A dictionary is a general-purpose data structure for storing a group of objects. A dictionary has a set of keys and each key has a single associated value._ - [_Wikibooks_](https://en.wikibooks.org/wiki/A-level_Computing/AQA/Paper_1/Fundamentals_of_data_structures/Dictionaries#:~:text=A%20dictionary%20is%20a%20general,has%20a%20single%20associated%20value.&text=Different%20languages%20enforce%20different%20type,often%20implemented%20as%20hash%20tables.)

## List Of Operations Available

* **set**: insert a new key-value pair in the dictionary.
* **get**: return the value if the key is present.
* **remove**: remove key-value pair from the dictionary if present.
* **hasKey**: check if the key exists for not.
* **keys**: return all the keys in the dictionary. 
* **values**: return all the values in the dictionary. 
* **keyValues** : return an array containing all the pairs.
* **forEach**:  takes callback function to perform an operation on each pair.

> _A dictionary is also known as a map,symbol table, and an associative array_

### Implementation of Dictionary in Javascript

We start by defining a class, **Dictionary** with property a _**table**_. Property table will be javascript Object which will holds items in it. In a dictionary, the ideal would be to store keys of type string and any type of value \(from primitive type such as numbers, a string, to complex objects\). However, because JavaScript is not strongly typed, we cannot guarantee the key will be a string .i.e,

> We first transform the key whatever object is passed as the key into a string to make it easier to search and retrieve values from the Dictionary class.
>
> Values will be Stored as **table\[stringify\(Key\)\] = new KeyValues\(key,value\)**;

```javascript
    class Dictionary {
    constructor(toStrFn = toStringFunc) {
        this.table = {};
        this.toStrFn = toStrFn;
        }
    }
```

> Default String Stringify function \`\`\`javascript

function toStringFunc\(key\) { if \(key == null\) { return 'NULL' } if \(key == undefined\) { return 'UNDEFINED' } if \(\(typeof key == "string"\) \|\| key instanceof String\) { return `${key}`; } return key.toString\(\); }

```text
## Set
When inserting a key-value pair, we will check if the key & value is not null. 

Else : 
* Stringify the key using the default string method
* Create a new instance of KeyPair.
* Add the stringify value as the key and value as the instance of Keypair.

> Dictionary Keys are unique.You can't have two or more keys to the same value . if present then it will just override the old value with the new one.

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

### KeyValue Class

```javascript
     class KeyValue{
     constructor(key, value){
         this.key = key;
         this.value = value;
     }
     toString(){
         return `[#${this.key} , ${this.value}]`
     }
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

When removing a key-value pair, We first need to check if the key is present in the Dictionary using the HasKey method. If present then deletes the key-value pair.

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

If a key-value pair, with a key, exists then return value or else null. As we know that we first we stringify the key and set that as the Object key and value as the instance of KeyValue. ie.

* Stringify the key. 
* Return the stringify key's KeyValue value.

  ```javascript
    get(key) {
        const keyValuesPair = this.table[this.toStrFn(key)];
        return keyValuesPair != null ? keyValuesPair.value : null;
    }
  ```

  **KeyValues**

This method will return all the stored _key-value pair_ in the **Dictionary class**,

* Initialize an array _keyValuePairs_
* Iterate _table_ property, if the key exists then push to  keyValuePairs array
* Return the keyValuePairs.

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

This method returns all the key-value pairs keys. We will evoke the KeyValues extract the **keys** using [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Alternative use can also do the same thing using for loop.

```javascript
    keys() {
        return this.keyValues().map(element => element.key);
    }
```

## Values

This method returns all the key-value pairs values. We will evoke the KeyValues extract the **values** using Array.prototype.map

```javascript
    values() {
        return this.keyValues().map(element => element.value);
    }
```

## ForEach

ForEach is an iterator function, Which allows us to loop the all key-value pair present in the Dictionary class. But, the same can be applied for other data structures too.

* We evoke the KeyValues and get all the key-value pairs.
* We will iterate over the individual pairs and execute the callback until the condition is true. 

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

> [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) ES6 ,Is similar to Dictionary .

### Conclusion :

| Methods | Complexity |
| :--- | :---: |
| set | O\(n\) |
| get | O\(1\) |
| remove | O\(1\) |
| keys | O\(n\) |
| values | O\(n\) |
| KeyValues | O\(n\) |
| forEach | O\(n\) |

