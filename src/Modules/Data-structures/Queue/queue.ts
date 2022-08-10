export class Queue {
  queue: number[];

  constructor(data: number[] = []) {
    this.queue = data;
  }

  enqueue(element: number): void {
    this.queue.push(element);
  }

  dequeue(): void {
    if (this.queue.length > 0) {
      this.queue.splice(0, 1);
    }
  }

  peek(): number {
    if (this.queue.length > 0) {
      return this.queue[0];
    } else {
      return NaN;
    }
  }
}
