export class SingleLinkNode {
  data: number;
  next: SingleLinkNode | any;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}
