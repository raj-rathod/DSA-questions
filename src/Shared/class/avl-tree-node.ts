export class AvlTreeNode {
  leftChild: AvlTreeNode | any;
  rightChild: AvlTreeNode | any;
  height: number;
  data: number;

  constructor(data: number) {
    this.leftChild = null;
    this.rightChild = null;
    this.height = 1;
    this.data = data;
  }
}
