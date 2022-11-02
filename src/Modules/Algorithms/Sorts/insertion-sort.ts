import { Helper } from "../../../Helper/helper";

export class InsertionSort {

    insertionSort(arr: number[]): void {
        let i = 0;
        const n = arr.length;
        while(i < n) {
            let j = i - 1;
            while(j >= 0 && arr[j] > arr[j+1]){
                arr = Helper.swapElement(arr, j, j+1);
                j--;
            }
            i++;
        }
    }
}