import { BinaryTreeNode } from "../../../Shared/class/binary-tree-node";

export class BinaryTree {
    root: BinaryTreeNode | any;
    nodeData: number[];
    constructor(){
        this.root = null;
        this.nodeData = [];
    }

    createBinaryTree(arr: number[]): void{
        this.root = this.insertNodeAtLevel(arr, 0);  
    }

    inOrderTraversal(): number[]{
       this.nodeData = [];
       this.inorderTreeData(this.root);
       return this.nodeData;
    }

    preOrderTraversal(): number[]{
        this.nodeData = [];
        this.preorderTreeData(this.root);
        return this.nodeData;
    }

    postOrderTraversal(): number[]{
        this.nodeData = [];
        this.postorderTreeData(this.root);
        return this.nodeData;
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

    inorderTreeData(node: BinaryTreeNode): void{
        if(node === null){
            return;
        }
        this.inorderTreeData(node.leftChild);
        this.nodeData.push(node.data);
        this.inorderTreeData(node.rightChild);
    }

    preorderTreeData(node: BinaryTreeNode): void{
        if(node === null){
            return;
        }
        this.nodeData.push(node.data);
        this.preorderTreeData(node.leftChild);
        this.preorderTreeData(node.rightChild);
    }

    postorderTreeData(node: BinaryTreeNode): void{
        if(node === null){
            return;
        }
        this.postorderTreeData(node.leftChild);
        this.postorderTreeData(node.rightChild);
        this.nodeData.push(node.data);
    }

    heightOfBinaryTree(root: BinaryTreeNode): number {
       if(root === null) return 0;
       let lHeight = this.heightOfBinaryTree(root.leftChild) + 1;
       let rHeight = this.heightOfBinaryTree(root.rightChild) + 1;
       return Math.max(lHeight, rHeight);
    }

}
