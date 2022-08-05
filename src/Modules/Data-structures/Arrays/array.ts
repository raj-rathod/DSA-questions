export class Array {
  createArray(array: number[]): number[] {
    return array;
  }

  insertAtFirst(array: number[], insertElement: number): number[] {
    array.unshift(insertElement);
    return array;
  }

  insertAtEnd(array: number[], insertElement: number): number[] {
    array.push(insertElement);
    return array;
  }
}
