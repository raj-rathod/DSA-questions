export class Queue {
  enqueue(arr: number[], element: number): number[] {
    arr.push(element);
    return arr;
  }

  dequeue(arr: number[]): number[] {
    if (arr.length > 0) {
      arr.splice(0, 1);
    }
    return arr;
  }

  peek(arr: number[]): number {
    return arr[0];
  }
}
