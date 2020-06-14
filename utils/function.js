function toStringFunc(key) {
    if (key == null) {
        return 'NULL'
    }
    if (key == undefined) {
        return 'UNDEFINED'
    }
    if ((typeof key == "string") || key instanceof String) {
        return `${key}`;
    }
    return key.toString();
}


const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns {Compare}
 */
function defaultCompare(a, b) {
    if (a === b) { // {1}
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}

/**
 * 
 * @param {Array} array 
 * @param {Number} index 
 * @param {Number} nextIndex 
 */
const swap = (array , index , nextIndex) => {
    [array[index] , array[nextIndex] ] = [ array[nextIndex] , array[index]];
}


module.exports = {
    toStringFunc,
    defaultCompare,
    Compare,
    swap
}