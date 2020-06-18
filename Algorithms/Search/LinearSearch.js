const {
    defaultEqualFun
} = require('../../utils/function');

/**
 * 
 * @param {Array} array 
 * @param {any} array 
 * @param {Function} equalFun 
 */
const LinearSearch = (array, key, equalFun = defaultEqualFun) => {
    for (let index = 0; index < array.length; index++) {
        if (equalFun(array[index], key)) {
            return true;
        }
    }
    return false;
}



console.time('LinearSearch')
console.log(LinearSearch([1, 3, 5, 6, 8, 9, 9, 7, 89, 7], 7));
console.timeEnd('LinearSearch')


module.exports = {
    LinearSearch
}