import { SingleLinkNode } from '../../../Shared/class/single-link-node';

export class SingleLinkedList {
  head: SingleLinkNode | null;
  currentNode: any;
  previousNode: any;
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

  insertNodeAtFirst(element: number): void {
    const node = new SingleLinkNode(element);
    this.currentNode = this.head;
    this.head = node;
    this.head.next = this.currentNode;
  }

  insertNodeAtEnd(element: number): void {
    const node = new SingleLinkNode(element);
    if (this.head != null) {
      this.currentNode = this.head;
      while (this.currentNode.next !== null) {
        this.currentNode = this.currentNode.next;
      }
      this.currentNode.next = node;
    } else {
      this.head = node;
    }
  }

  insertNodeAtPosition(element: number, position: number): void {
    if (position === 1 || this.head === null) {
      this.insertNodeAtFirst(element);
      return;
    }
    const node = new SingleLinkNode(element);
    let count = 1;
    this.currentNode = this.head;
    this.previousNode = this.head;
    while (this.currentNode.next !== null) {
      if (count === position) {
        break;
      }
      count++;
      this.previousNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
    node.next = this.currentNode;
    this.previousNode.next = node;
  }

  deleteAtFirst(): void {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  deleteAtEnd(): void {
    if (this.head !== null) {
      this.currentNode = this.head;
      while (this.currentNode.next != null) {
        this.previousNode = this.currentNode;
        this.currentNode = this.currentNode.next;
      }
      this.previousNode.next = null;
    }
  }

  deleteAtPosition(position: number): void {
    if (position === 1 || this.head === null) {
      this.deleteAtFirst();
      return;
    }
    let count = 0;
    this.currentNode = this.head;
    while (this.currentNode.next !== null) {
      count++;
      if (count === position) {
        break;
      }

      this.previousNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
    this.previousNode.next = this.currentNode.next;
  }

  updateNodeAtFirst(element: number): void {
    if (this.head !== null) {
      this.head.data = element;
    } else {
      this.head = new SingleLinkNode(element);
    }
  }

  updateNodeAtEnd(element: number): void {
    if (this.head != null) {
      this.currentNode = this.head;
      while (this.currentNode.next != null) {
        this.currentNode = this.currentNode.next;
      }
      this.currentNode.data = element;
    } else {
      this.updateNodeAtFirst(element);
    }
  }

  updateNodeAtPosition(position: number, element: number): void {
    if (this.head != null) {
      this.currentNode = this.head;
      let count = 1;
      while (this.currentNode.next !== null) {
        if (position === count) {
          break;
        }
        count++;
        this.currentNode = this.currentNode.next;
      }
      this.currentNode.data = element;
    } else {
      this.updateNodeAtFirst(element);
    }
  }

  convertToCircularLinkedList(): void {
    if (this.head != null) {
      this.currentNode = this.head;
      while (this.currentNode.next !== null) {
        this.currentNode = this.currentNode.next;
      }
      this.currentNode.next = this.head;
    }
  }

  isCircularLinkedList(): boolean {
    if (this.head === null) {
      return false;
    } else {
      this.currentNode = this.head.next;
      while (this.currentNode.next !== null) {
        if (this.currentNode === this.head) {
          return true;
        }
        this.currentNode = this.currentNode.next;
      }
      return false;
    }
  }

  reverseASingleLinkedList(): SingleLinkNode | null {
    if (this.head === null) {
      return this.head;
    } else {
      this.currentNode = this.head.next;
      this.previousNode = this.head;
      this.previousNode.next = null;
      while (this.currentNode !== null) {
        let temp = this.currentNode;
        this.currentNode = this.currentNode.next;
        temp.next = this.previousNode;
        this.previousNode = temp;
      }
      return this.previousNode;
    }
  }
}
