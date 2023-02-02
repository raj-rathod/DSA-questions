import { Helper } from "../../../Helper/helper";

export class QuickSort{

    quickSort(arr: number[], left: number, right: number): void{
        if(left < right){
            const pivotIndex  = this.partition(arr, left, right);
            this.quickSort(arr, left, pivotIndex-1);
            this.quickSort(arr, pivotIndex+1, right);
        }
    }

    partition(arr: number[], left: number, right: number): number{
        const pivot = arr[left];
        let i = left;
        let j = right;
        while(true){
            while(arr[i] <= pivot){
               i++;
            }
            while(arr[j] > pivot){
                j--;
            }
            if(i < j){
              arr = Helper.swapElement(arr, i, j);
            }else{
              arr = Helper.swapElement(arr,left, j);
              break;
            }
        }
        return j;
    }

}