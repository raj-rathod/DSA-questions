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

  static maximum = (firstNumber: number, secondNumber: number): number => {
    return Math.max(firstNumber, secondNumber);
  };

  static minimum = (firstNumber: number, secondNumber: number): number => {
    return Math.min(firstNumber, secondNumber);
  };
}
