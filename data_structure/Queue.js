/**
 *  @class Queue implement using Object
 *  FIFO (first in - first out)
 */

 class Queue {
     constructor(){
         this.count = 0;
         this.lowestCount = 0;
         this.items = {};
     }

     equeue(element){
         this.items[this.count] = element;
         this.count ++;
     }

     /* remove the element which was insert first */
     dequeue(){
         if (this.isEmpty()) {
             return undefined;
         }
         let result = this.items[this.lowestCount];
         delete this.items[this.lowestCount];
         this.lowestCount ++;
         return result;

     }

     isEmpty(){
         return this.count - this.lowestCount == 0;
     }

     size(){
         return this.count - this.lowestCount;
     }

     peek(){
         if (this.isEmpty()) {
             return undefined;
         }
         return this.items[this.lowestCount];

     }
     clear(){
         this.items = {}
         this.count = 0;
         this.lowestCount = 0;
         return this.items;
     }

     toString(){
         if (this.isEmpty()) {
             return "";
         }
         let string = `${this.items[this.lowestCount]}`;
         for (let index = this.lowestCount+1; index < this.count; index++) {
            string =  `${string},${this.items[index]}`;            
        }
        return string;
     }

 }


 module.exports = {Queue};