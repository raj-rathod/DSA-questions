export class Helper {
  static swapElement(
    array: number[],
    firstIndex: number,
    secondIndex: number
  ): number[] {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
  }
}
