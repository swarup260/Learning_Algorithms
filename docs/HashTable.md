# What is HashTable ? 
>  

> wiki definition


## What is Hashing ? 

>

## Hashtable Methods 

* __put__
* __remove__
* __get__

# Implementation in Javascript 

## put
## remove
## get

## Hash Function 

```javascript

    _loseloseHashCode(key) {
        if (typeof key == "number") {
            return key;
        }
        const keyString = toStringFunc(key);
        let code = 0;
        for (let index = 0; index < key.length; index++) {
            code += key.charCodeAt(index);
        }
        return code % 37;
    }


```

## Put
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
```javascript
    get(key) {
        const keyHash = this.getHashCode(key);
        return this.table[keyHash] != null ? this.table[keyHash].value : undefined;
    }
```

## Helper Methods 

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


get the full source code [here](https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/HashTable.js)

## Hash Collisions 

* __Linear Probing__
* __Separate Chaining__

### Conclusion : 

| Methods       | Complexity    |
| ------------- |:-------------:| 

In next post i will explain Linear Probing