export class Stack {
  push(arr: number[], element: number): number[] {
    arr.push(element);
    return arr;
  }

  pop(arr: number[]): number[] {
    if (arr.length > 0) {
      arr.splice(arr.length - 1, 1);
    }
    return arr;
  }

  peek(arr: number[]): number {
    if (arr.length > 0) {
      return arr[arr.length - 1];
    } else {
      return NaN;
    }
  }
}
