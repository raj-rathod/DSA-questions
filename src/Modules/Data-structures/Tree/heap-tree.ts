import { Helper } from "../../../Helper/helper";

export class HeapTree {

    constructor(){
    }

    createMaxHeap(inputArray:number[]): number[] {
      for(let i = Math.floor(inputArray.length / 2 )-1; i >= 0; i--){
        inputArray = this.heapify(inputArray, inputArray.length, i);
      }
      return inputArray;
    }

    heapify(arr:number[], arraySize:number, level:number): number[] {
        let root = level;
        const leftChild = 2 * level + 1;
        const rightChild = 2 * level + 2;
        if(leftChild < arraySize && arr[leftChild] > arr[root]){
            root = leftChild;
        }
        if(rightChild < arraySize && arr[rightChild] > arr[root]){
            root = rightChild;
        }
        if(root != level){
            arr = Helper.swapElement(arr, root , level);
            this.heapify(arr,arraySize, root);
        }
        return arr;
    }

    heapsort(heapArray:number[]): number[] {
      for(let i= heapArray.length-1; i>=0; i--) {
        heapArray = Helper.swapElement(heapArray,0,i);
        heapArray = this.heapify(heapArray,i,0);
      }
      return heapArray;
    }
}