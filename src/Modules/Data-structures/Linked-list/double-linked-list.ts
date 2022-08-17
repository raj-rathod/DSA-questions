import { DoubleLinkNode } from '../../../Shared/class/double-link-node';

export class DoubleLinkedList {
  head: DoubleLinkNode | any;
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

  insertNodeAtFirst(element: number): void {
    const newNode = new DoubleLinkNode(element);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  insertNodeAtEnd(element: number): void {
    const newNode = new DoubleLinkNode(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.currentNode = this.head;
      while (this.currentNode.next != null) {
        this.currentNode = this.currentNode.next;
      }
      newNode.prev = this.currentNode;
      this.currentNode.next = newNode;
    }
  }

  insertNodeAtPosition(element: number, position: number): void {
    const newNode = new DoubleLinkNode(element);
    if (position === 1 || this.head === null) {
      this.insertNodeAtFirst(element);
    } else {
      this.currentNode = this.head;
      let count = 1;
      while (this.currentNode.next != null) {
        if (count === position) {
          break;
        }
        count++;
        this.currentNode = this.currentNode.next;
      }
      newNode.prev = this.currentNode.prev;
      this.currentNode.prev.next = newNode;
      this.currentNode.prev = newNode;
      newNode.next = this.currentNode;
    }
  }
}
