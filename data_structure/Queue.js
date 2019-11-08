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

     push(value){
         this.items[this.count] = value;
         this.count ++;
     }

     /* remove the element which was insert first */
     dequeue(value){
         if (this.isEmpty()) {
             return undefined;
         }
         let result = this.items[this.lowestCount];
         delete this.items[this.lowestCount];
         this.lowestCount ++;
         return result;

     }

     isEmpty(){
         return this.count == 0;
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
         let string = `${this.items[this.lowestCount]},`;
         for (let index = this.lowestCount+1; index < this.count; index++) {
            string += `${this.items[index]}`;
            if (this.items[index+1]) {
                string += ",";
            }            
        }
        return string;
     }

 }


 module.exports = {Queue};