export class DoubleLinkNode {
  data: number;
  next: DoubleLinkNode | any;
  prev: DoubleLinkNode | any;
  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
