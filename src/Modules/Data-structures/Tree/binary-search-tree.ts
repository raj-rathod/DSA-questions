import { BinaryTreeNode } from "../../../Shared/class/binary-tree-node";

export class BinarySearchTree {
    root: BinaryTreeNode | any;
    findNode: BinaryTreeNode | any;

    constructor(){
        this.root = null;
        this.findNode = null;
    }

    createBinarySearchTree(arr: number[], isSortedArray: boolean): void{
       this.root = null;
       if(isSortedArray){
          this.root = this.constructBStFromSortedArray(arr, 0, arr.length - 1);
       }else{
          arr.forEach(element =>{
            this.root = this.insertNode(this.root, element);
          });
       }
    }

    constructBStFromSortedArray(arr: number[], startIndex: number, endIndex: number): BinaryTreeNode| null{
        if(startIndex > endIndex) return null;
        const mid  = Math.floor((startIndex + endIndex)/2);
        const node = new BinaryTreeNode(arr[mid]);
        node.leftChild = this.constructBStFromSortedArray(arr, startIndex, mid-1);
        node.rightChild = this.constructBStFromSortedArray(arr, mid + 1, endIndex);
        return node;
    }

    insertNode(node: BinaryTreeNode, element: number): BinaryTreeNode{
      if(node === null) {
        return new BinaryTreeNode(element);
      }else if(node.data > element){
        node.leftChild = this.insertNode(node.leftChild, element);
      }else{
        node.rightChild = this.insertNode(node.rightChild, element);
      }
      return node;
    }

    inOrderTraversal(root: BinaryTreeNode): number[]{
        let nodeData: number[] = [];
        if(root === null) return [];
        nodeData = nodeData.concat(this.inOrderTraversal(root.leftChild));
        nodeData.push(root.data);
        nodeData = nodeData.concat(this.inOrderTraversal(root.rightChild));
        return nodeData;
    }
 
    preOrderTraversal(root: BinaryTreeNode): number[]{
        let nodeData: number[] = [];
        if(root === null) return [];
        nodeData.push(root.data);
        nodeData = nodeData.concat(this.preOrderTraversal(root.leftChild));
        nodeData = nodeData.concat(this.preOrderTraversal(root.rightChild));
        return nodeData;
     }
 
     postOrderTraversal(root: BinaryTreeNode): number[]{
        let nodeData: number[] = [];
        if(root === null) return [];
        nodeData = nodeData.concat(this.postOrderTraversal(root.leftChild));
        nodeData = nodeData.concat(this.postOrderTraversal(root.rightChild));
        nodeData.push(root.data);
        return nodeData;
     }
}
