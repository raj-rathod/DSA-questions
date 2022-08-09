export class Stack {
  stack: number[];

  constructor(data: number[] = []) {
    this.stack = data;
  }

  push(element: number): void {
    this.stack.push(element);
  }

  pop(): void {
    if (this.stack.length > 0) {
      this.stack.splice(this.stack.length - 1, 1);
    }
  }

  peek(): number {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      return NaN;
    }
  }
}
