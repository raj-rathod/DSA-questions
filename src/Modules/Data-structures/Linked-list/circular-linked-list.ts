import { SingleLinkNode } from "../../../Shared/class/single-link-node";

export class CircularLinkedList {
    head: SingleLinkNode| any;
    currentNode: SingleLinkNode| any;
    lastNode: SingleLinkNode| any;
    constructor() {
        this.head = null;
        this.currentNode = null;
    }

    createCircularLinkedList(arr: number[]): void{
        arr.forEach((item: number, index: number) => {
          const newNode = new SingleLinkNode(item);
          if(index === 0){
            this.head = newNode;
            this.currentNode = this.head;
          }else{
            this.currentNode.next = newNode;
            this.currentNode = this.currentNode.next;
          }
        });
        if(this.head != null){
            this.currentNode.next = this.head;
            this.lastNode = this.currentNode;
        }
    }

    insertNodeAtFirst(element: number): void {
        const newNode = new SingleLinkNode(element);
        if(this.head != null){
            newNode.next = this.head;
            this.lastNode.next = newNode;
            this.head = this.lastNode.next;
        }else{
            this.head = newNode;
            this.head.next = this.head;
            this.lastNode = this.head;
        }
    }

    insertNodeAtEnd( element: number): void {
        const newNode =  new SingleLinkNode(element);
        if(this.head != null){
            newNode.next = this.lastNode.next;
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }else{
            this.head = newNode;
            this.head.next = this.head;
            this.lastNode = this.head; 
        }
    }

    insertNodeAtPosition(element: number, position: number): void {
        const newNode =  new SingleLinkNode(element);
        if(this.head != null && position > 0){
          if(position === 1){
            this.insertNodeAtFirst(element);
            return;
          }
           let count = 2;
           this.currentNode =  this.head;
           while(this.currentNode.next != this.head){
               if(position === count){
                  break;
               }
               count++;
               this.currentNode = this.currentNode.next;
           }
           if(count === position && this.currentNode != this.lastNode){
                newNode.next  = this.currentNode.next;
                this.currentNode.next = newNode;
           }else if(count === position && this.currentNode === this.lastNode){
                this.insertNodeAtEnd(element);
           }else{
            return;
           }
        }
    }

    deleteAtFirst(): void {
        if(this.head != null && this.head.next != this.head){
           this.head = this.head.next;
           this.lastNode.next = this.head;
        }else{
            this.head = null;
        }
    }

    deleteAtEnd(): void {
        if(this.head != null && this.head.next != this.head){
            this.currentNode = this.head;
            let previous = this.head;
            while(this.currentNode.next != this.head){
                previous = this.currentNode;
                this.currentNode = this.currentNode.next;
            }
            previous.next = this.head;
        }else{
            this.head =  null
        }
    }

    deleteAtPosition(position: number): void {
        if(this.head != null && position > 0){
            if(position === 1){
                this.deleteAtFirst();
                return;
            }
            let count  = 1;
            let previous = this.head;
            this.currentNode = this.head;
            while(this.currentNode.next != this.head){
                if(position === count){
                    break;
                }
                count++;
                previous = this.currentNode;
                this.currentNode = this.currentNode.next;
            }
            if(position === count){
                previous.next = this.currentNode.next;
            }else{
                return;
            }
        }else{
            return;
        }
    }
}
