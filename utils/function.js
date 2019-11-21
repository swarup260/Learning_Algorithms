function toStringFunc(key) {
    if (key == null) {
        return 'NULL'
    }
    if (key == undefined) {
        return 'UNDEFINED'
    }
    if ((typeof key == "string" ) || key instanceof String) {
        return `${key}`;
    }
    return key.toString();
}


module.exports = {
    toStringFunc
}