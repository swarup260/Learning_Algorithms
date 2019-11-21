exports.toStringFunc = function (key) {
    if (key == null) {
        return 'NULL'
    }
    if (key == undefined) {
        return 'UNDEFINED'
    }
    if ((typeof key == "string" ) || key instanceof String) {
        return key;
    }
    return key.toString();
}