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
  
  insertNodeAtFirst(element: number): void{
    const node = new SingleLinkNode(element);
    this.currentNode = this.head;
    this.head = node;
    this.head.next = this.currentNode;
  }

  insertNodeAtEnd(element: number): void{
    const node = new SingleLinkNode(element);
    this.currentNode = this.head;
    while( this.currentNode.next !== null){
      this.currentNode = this.currentNode.next;
    }
    this.currentNode.next = node;
  }

  insertNodeAtPosition(element: number, position: number): void {
    if(position === 1){
      this.insertNodeAtFirst(element);
      return;
    }
    const node = new SingleLinkNode(element);
    let count = 1;
    this.currentNode = this.head;
    this.previousNode = this.head;
    while( this.currentNode.next!== null){
      if( count === position){
        break
      }
      count++;
      this.previousNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
    node.next = this.currentNode;
    this.previousNode.next = node;
   
  }

  deleteAtFirst(): void {
    if( this.head !== null){
      this.head = this.head.next;
    }
  }
  
  deleteAtEnd(): void {
    this.currentNode = this.head;
    while (this.currentNode.next != null){
      this.previousNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
    this.previousNode.next = null;
  }
}
