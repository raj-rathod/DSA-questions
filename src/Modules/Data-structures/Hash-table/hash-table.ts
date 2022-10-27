import { Helper } from "../../../Helper/helper";

export class HashTable {
   hashTable: number[];
   
   constructor(){
      this.hashTable=[];
   }

   hashing(inputArray: number[]): void{
      const tableSize = Helper.getPrime(inputArray.length);
      this.hashTable = Array(tableSize).fill(-1);
      inputArray.forEach(element =>{
        let index = this.hashFunction(tableSize, element);
        if(this.hashTable[index] < 0 || this.hashTable[index] === element){
          this.hashTable[index] = element;
        }else{
          let newIndex = index;
          while(this.hashTable[newIndex] !=-1){
            newIndex++;
            if(newIndex >= tableSize){
                newIndex = 0;
            }
          }
          this.hashTable[newIndex] = element;
        }
      })
   }

   hashFunction(m: number, k:number): number { //h(k) = floor(m * ((kA) mod 1))
    // where m is the tableSize and k is the Element
     const A = 0.6180339887; //A = (sqrt(5)-1)/2 = 0.6180339887
     return Math.floor(m*((k*A) % 1));
   }

   searchKey(tableSize:number, key:number):boolean {
     const index = this.hashFunction(tableSize,key);
     if(this.hashTable[index] === key){
        return true;
     }else{
        if(this.hashTable[index]=== -1){
            return false;
        }else{
           let newIndex = index;
           while(this.hashTable[newIndex] !== key){
             newIndex++;
             if(newIndex === index){
                return false;
             }
             if(newIndex >= tableSize){  
                newIndex = 0;
             }
           }
           return true;
        }
     }
   }

   deleteKey(tableSize:number, key:number): void {
    const index = this.hashFunction(tableSize,key);
    if(this.hashTable[index] === key){
       this.hashTable[index] = -1;
    }else{
       if(this.hashTable[index]=== -1){
           return;
       }else{
          let newIndex = index;
          while(this.hashTable[newIndex] !== key){
            newIndex++;
            if(newIndex === index){
               return;
            }
            if(newIndex >= tableSize){  
               newIndex = 0;
            }
          }
          this.hashTable[newIndex] = -1;
       }
    }
   }


}
