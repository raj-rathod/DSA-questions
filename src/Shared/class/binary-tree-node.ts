export class BinaryTreeNode {
    parentNode: BinaryTreeNode| any;
    leftChild: BinaryTreeNode| any;
    rightChild: BinaryTreeNode| any;
    data: number;

    constructor(data: number){
        this.parentNode = null;
        this.leftChild = null;
        this.rightChild = null;
        this.data = data;
    }
}