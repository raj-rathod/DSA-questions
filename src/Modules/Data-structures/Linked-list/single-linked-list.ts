import { SingleLinkNode } from '../../../Shared/class/single-link-node';

export class SingleLinkedList {
  head: SingleLinkNode | null;
  currentNode: any;
  constructor() {
    this.head = null;
    this.currentNode = null;
  }

  createSingleLinkedList(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
      const node = new SingleLinkNode(arr[i]);
      if (i === 0) {
        this.head = node;
        this.currentNode = this.head;
      } else {
        this.currentNode.next = node;
        this.currentNode = node;
      }
    }
  }
}
