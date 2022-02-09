# What is HashTable ? 
>**

### Difference Between Dictionary & HashTable

## List Of Operations Available 

* __put__
* __remove__
* __get__
* __hasKey__
* __getHashCode__


### Implementation of HashTable in Javascript :

```javascript

    class HashTable {
        constructor() {
            this.table = {};
        }
    }

```

## getHasCode

```javascript

    getHashCode(key) {
        return this._loseloseHashCode(key);
    }

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


### Hash Collisions

* __Linear Probing__
* __Separate Chaining__

### Conclusion : 

| Methods       | Complexity    |
| ------------- |:-------------:| 
