export class MergeSort{

    mergeSort(arr: number[], left: number, right: number): void {
       if(left < right){
         const mid = left + Math.floor((right-left)/2);
         this.mergeSort(arr, left, mid);
         this.mergeSort(arr, mid+1, right);
         this.merge(arr, left, mid, right);
       }
    }

    merge(arr: number[], left: number, mid: number, right: number): void {
       const leftArr = arr.slice(left, mid+1);
       const rightArr = arr.slice(mid+1, right+1);
       let i = 0;
       let j = 0;
       let k = left;
       while(i < leftArr.length && j < rightArr.length) {
          if(leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
          }else{
            arr[k] = rightArr[j];
            j++;
          }
          k++;
       }
       while(i < leftArr.length){
          arr[k] = leftArr[i];
          i++;
          k++;
       }
       while(j < rightArr.length){
         arr[k] = rightArr[j];
         j++;
         k++;
       }
    }

}