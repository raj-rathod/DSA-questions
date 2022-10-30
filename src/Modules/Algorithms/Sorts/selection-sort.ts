import { Helper } from "../../../Helper/helper";

export class SelectionSort{
    
    selctionSort(arr: number[]): number[]{
        const n = arr.length;
        let i = 0;
        while(i < n-1){
           let minimumValue = arr[i];
           let j = i + 1;
           let keyIndex = j;
           while(j < n){
              if(arr[j] < minimumValue){
                keyIndex = j;
                minimumValue =  arr[j];
              }
              j++; 
           } 
           if(arr[i] != minimumValue){
              arr = Helper.swapElement(arr, i, keyIndex);
           }
           i++;
        }
        return arr;
    }

}