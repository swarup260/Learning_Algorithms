const {Queue} = require('../data_structure/Queue');
const {Dequeue} = require('../data_structure/Dequeue');
const {StackObject,Stack} = require('../data_structure/Stack')

/* Using palidromeChecker Queue */
function palidromeCheckerUsingQueue (string) {
    let lowerCaseString =  string.toLocaleLowerCase().split(' ').join("");
    let queue  = new Queue()
    for (let index = string.length; index >= 0 ; index--) {
        queue.equeue(lowerCaseString.charAt(index));
    }    
    let reverseString = "";
    while(!queue.isEmpty()){
        reverseString += queue.dequeue();
    }
    // console.log(reverseString);
    
    if (lowerCaseString == reverseString) {
        return true;
    }
    return false;
    
}

/* Using palidromeChecker Stack */
function palidromeCheckerUsingStackObject (string) { 
    let lowerCaseString =  string.toLocaleLowerCase().split(' ').join("");
    let stack = new StackObject();
    for (let index = 0 ; index < lowerCaseString.length; index++) {
        stack.push(lowerCaseString.charAt(index));
    }
    let reverseString = "";
    while(!stack.isEmpty()){
        reverseString += stack.pop();
    }
    // console.log(reverseString);
    
    if (lowerCaseString == reverseString) {
        return true;
    }
    return false;
}
/* Using palidromeChecker Stack */
function palidromeCheckerUsingStack (string) { 
    let lowerCaseString =  string.toLocaleLowerCase().split(' ').join("");
    let stack = new Stack();
    for (let index = 0 ; index < lowerCaseString.length; index++) {
        stack.push(lowerCaseString.charAt(index));
    }
    
    let reverseString = "";
    while(!stack.isEmpty()){
        reverseString += stack.pop();
    }
    // console.log(reverseString);
    
    if (lowerCaseString == reverseString) {
        return true;
    }
    return false;
}

function palidromeCheckerUsingDeque (string) { 
    let lowerCaseString =  string.toLocaleLowerCase().split(' ').join("");
    let isEqual = true;
    let dequeue = new Dequeue();
    for (let index = 0 ; index < lowerCaseString.length; index++) {
        dequeue.addBack(lowerCaseString.charAt(index));
    }
    // console.log(dequeue.items);
    while(!dequeue.size() > 1 && isEqual){
        let startChar = dequeue.removeFront();
        let endChar = dequeue.removeBack();
        // console.log(` ${startChar} || ${endChar}`);
        if (startChar != endChar) {
            isEqual = false;
        }
    }
    return isEqual;
}

console.log("Stack");
console.time();
console.log(palidromeCheckerUsingStack('madam tt madam     '));
console.timeEnd();
console.log("=============================================");
console.log("StackObject");
console.time();
console.log(palidromeCheckerUsingStackObject('madam tt madam     '));
console.timeEnd();
console.log("=============================================");
console.log("Queue");
console.time();
console.log(palidromeCheckerUsingQueue('madam tt madam     '));
console.timeEnd();
console.log("=============================================");
console.log("Dequeue");
console.time();
console.log(palidromeCheckerUsingDeque('madam tt madam     '));
console.timeEnd();
console.log("=============================================");
