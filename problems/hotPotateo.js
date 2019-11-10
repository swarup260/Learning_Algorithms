
const {Queue} = require('../data_structure/Queue');


function HotPotateos (listOfName , number){
    const queue = new Queue();
    const eliminatedList = [];
    for (let index = 0; index < listOfName.length; index++) {
        queue.equeue(listOfName[index]);
    }
    while(queue.size() > 1) {
        for (let index = 0; index < number; index++) {
            queue.equeue(queue.dequeue());
        }
        eliminatedPerson = queue.dequeue();
        console.log(`${eliminatedPerson} is  eliminated`);
        eliminatedList.push(eliminatedPerson)
    }

    return {
        eliminated : eliminatedList,
        winner : queue.dequeue()
    }
    
}

console.log(HotPotateos(['swarup', 'rahul', 'rohit' , 'kuldeep', 'shreyash', 'roshan'],4));
// console.log(HotPotateos(['swarup', 'rahul', 'rohit' , 'kuldeep', 'shreyash', 'roshan'],6));
