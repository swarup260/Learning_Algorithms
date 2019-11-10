const {StackObject} = require('../data_structure/Stack');

const baseConvertor = ( number , base ) => {
    const stack = new StackObject();
    let string = "";
    while (number > 0) {
        let rem = Math.floor(number % base);
        stack.push(rem);
        number = Math.floor(number/base);
    }
    
    while(!stack.isEmpty()){

        string += `${stack.pop()}`
    }   
    return string;
} 



console.log(baseConvertor(10,16));
