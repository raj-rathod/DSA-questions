import { BinaryTreeNode } from '../../../Shared/class/binary-tree-node';

export class BinaryTree {
  root: BinaryTreeNode | any;
  lastNode: BinaryTreeNode | any;
  lastNodeParent: BinaryTreeNode | any;
  findNode: BinaryTreeNode | any;
  constructor() {
    this.root = null;
    this.lastNode = null;
    this.lastNodeParent = null;
    this.findNode = null;
  }

  createBinaryTree(arr: number[]): void {
    this.root = this.insertNodeAtLevel(arr, 0);
  }

  inOrderTraversal(root: BinaryTreeNode): number[] {
    let nodeData: number[] = [];
    if (root === null) return [];
    nodeData = nodeData.concat(this.inOrderTraversal(root.leftChild));
    nodeData.push(root.data);
    nodeData = nodeData.concat(this.inOrderTraversal(root.rightChild));
    return nodeData;
  }

  preOrderTraversal(root: BinaryTreeNode): number[] {
    let nodeData: number[] = [];
    if (root === null) return [];
    nodeData.push(root.data);
    nodeData = nodeData.concat(this.preOrderTraversal(root.leftChild));
    nodeData = nodeData.concat(this.preOrderTraversal(root.rightChild));
    return nodeData;
  }

  postOrderTraversal(root: BinaryTreeNode): number[] {
    let nodeData: number[] = [];
    if (root === null) return [];
    nodeData = nodeData.concat(this.postOrderTraversal(root.leftChild));
    nodeData = nodeData.concat(this.postOrderTraversal(root.rightChild));
    nodeData.push(root.data);
    return nodeData;
  }

  insertNodeAtLevel(arr: number[], index: number): BinaryTreeNode {
    let node: BinaryTreeNode | any = null;
    if (index < arr.length) {
      node = new BinaryTreeNode(arr[index]);
      node.leftChild = this.insertNodeAtLevel(arr, 2 * index + 1);
      node.rightChild = this.insertNodeAtLevel(arr, 2 * index + 2);
    }
    return node;
  }

  heightOfBinaryTree(root: BinaryTreeNode): number {
    if (root === null) return 0;
    let lHeight = this.heightOfBinaryTree(root.leftChild) + 1;
    let rHeight = this.heightOfBinaryTree(root.rightChild) + 1;
    return Math.max(lHeight, rHeight);
  }

  totalNodesCount(root: BinaryTreeNode): number {
    if (root === null) return 0;
    let count = 1;
    count += this.totalNodesCount(root.leftChild);
    count += this.totalNodesCount(root.rightChild);
    return count;
  }

  getLastNodeItsParent(
    root: BinaryTreeNode | null,
    parentNode: BinaryTreeNode | null,
    level: number
  ) {
    if (root == null) {
      return;
    }
    if (level === 1) {
      this.lastNode = root;
      this.lastNodeParent = parentNode;
    }
    this.getLastNodeItsParent(root.leftChild, root, level - 1);
    this.getLastNodeItsParent(root.rightChild, root, level - 1);
  }

  deleteLastNode(root: BinaryTreeNode): void {
    if (root === null) {
      return;
    }
    const treeHeight = this.heightOfBinaryTree(root);
    this.getLastNodeItsParent(root, null, treeHeight);
    if (this.lastNode !== null && this.lastNodeParent !== null) {
      if (this.lastNodeParent?.rightChild != null) {
        this.lastNodeParent.rightChild = null;
      } else {
        this.lastNodeParent.leftChild = null;
      }
    } else {
      this.root = null;
    }
  }

  searchNode(root: BinaryTreeNode, key: number): void {
    if (root === null || this.findNode != null) {
      return;
    }

    if (root.data === key) {
      this.findNode = root;
      return;
    }

    this.searchNode(root.leftChild, key);
    this.searchNode(root.rightChild, key);
  }

  deleteNode(root: BinaryTreeNode, key: number): void {
    if (root === null) {
      return;
    }
    this.searchNode(root, key);
    if (this.findNode === null) {
      return;
    } else if (
      this.findNode.leftChild === null &&
      this.findNode.rightChild === null
    ) {
      this.root = null;
    } else {
      this.deleteLastNode(root);
      this.findNode.data = this.lastNode.data;
    }
  }
}
