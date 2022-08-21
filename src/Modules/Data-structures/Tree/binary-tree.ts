import { BinaryTreeNode } from "../../../Shared/class/binary-tree-node";

export class BinaryTree {
    root: BinaryTreeNode | any;

    constructor(){
        this.root = null;
    }

    createBinaryTree(arr: number[]): void{
        this.root = this.insertNodeAtLevel(arr, 0);  
    }

    insertNodeAtLevel(arr: number[], index: number): BinaryTreeNode{
       let node: BinaryTreeNode| any = null;
       if(index < arr.length){
           node =  new BinaryTreeNode(arr[index]);
           node.leftChild =  this.insertNodeAtLevel(arr, (2 * index) + 1);
           node.rightChild = this.insertNodeAtLevel(arr, (2 * index) + 2);
       }
       return node;
    }

}
