import { DoubleLinkNode } from '../../../Shared/class/double-link-node';

export class DoubleLinkedList {
  head: DoubleLinkNode | null;
  currentNode: DoubleLinkNode | any;

  constructor() {
    this.head = null;
    this.currentNode = null;
  }

  createDoubleLinkedList(arr: number[]): void {
    arr.forEach((item: number, index: number) => {
      const newNode = new DoubleLinkNode(item);
      if (index === 0) {
        this.head = newNode;
        this.currentNode = this.head;
      } else {
        newNode.prev = this.currentNode;
        this.currentNode.next = newNode;
        this.currentNode = newNode;
      }
    });
  }
}
