export class BinaryTreeNode {
  leftChild: BinaryTreeNode | any;
  rightChild: BinaryTreeNode | any;
  data: number;

  constructor(data: number) {
    this.leftChild = null;
    this.rightChild = null;
    this.data = data;
  }
}
