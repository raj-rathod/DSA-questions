import { Helper } from '../../../Helper/helper';
import { AvlTreeNode } from '../../../Shared/class/avl-tree-node';

export class AvlTree {
  root: AvlTreeNode | any;

  constructor() {
    this.root = null;
  }

  createAvlTreeFromArray(array: number[]): void {
    array.forEach(key => {
      this.root = this.insertNode(this.root, key);
    });
  }

  getBalanceFactor(node: AvlTreeNode): number {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.leftChild) - this.getHeight(node.rightChild);
  }

  getHeight(node: AvlTreeNode): number {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  rightRotate(node: AvlTreeNode): AvlTreeNode {
    const x = node.leftChild;
    const y = x.rightChild;

    x.rightChild = node;
    node.leftChild = y;

    // Update heights
    node.height =
      Helper.maximum(
        this.getHeight(node.leftChild),
        this.getHeight(node.rightChild)
      ) + 1;
    x.height =
      Helper.maximum(
        this.getHeight(x.leftChild),
        this.getHeight(x.rightChild)
      ) + 1;

    // Return new root
    return x;
  }

  leftRotate(node: AvlTreeNode): AvlTreeNode {
    const x = node.rightChild;
    const y = x.leftChild;

    x.leftChild = node;
    node.rightChild = y;

    // Update heights
    node.height =
      Helper.maximum(
        this.getHeight(node.leftChild),
        this.getHeight(node.rightChild)
      ) + 1;
    x.height =
      Helper.maximum(
        this.getHeight(x.leftChild),
        this.getHeight(x.rightChild)
      ) + 1;

    // Return new root
    return x;
  }

  insertNode(node: AvlTreeNode | null, key: number): AvlTreeNode {
    if (node == null) {
      return new AvlTreeNode(key);
    }

    if (key < node.data) node.leftChild = this.insertNode(node.leftChild, key);
    else if (key > node.data)
      node.rightChild = this.insertNode(node.rightChild, key);
    // Duplicate keys not allowed
    else return node;

    node.height =
      Helper.maximum(
        this.getHeight(node.leftChild),
        this.getHeight(node.rightChild)
      ) + 1;

    const balance = this.getBalanceFactor(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && key < node.leftChild.data) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.rightChild.data) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.leftChild.key) {
      node.leftChild = this.leftRotate(node.leftChild);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.rightChild.key) {
      node.rightChild = this.rightRotate(node.rightChild);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  inOrderTraversal(root: AvlTreeNode): number[] {
    let nodeData: number[] = [];
    if (root === null) return [];
    nodeData = nodeData.concat(this.inOrderTraversal(root.leftChild));
    nodeData.push(root.data);
    nodeData = nodeData.concat(this.inOrderTraversal(root.rightChild));
    return nodeData;
  }

  preOrderTraversal(root: AvlTreeNode): number[] {
    let nodeData: number[] = [];
    if (root === null) return [];
    nodeData.push(root.data);
    nodeData = nodeData.concat(this.preOrderTraversal(root.leftChild));
    nodeData = nodeData.concat(this.preOrderTraversal(root.rightChild));
    return nodeData;
  }

  postOrderTraversal(root: AvlTreeNode): number[] {
    let nodeData: number[] = [];
    if (root === null) return [];
    nodeData = nodeData.concat(this.postOrderTraversal(root.leftChild));
    nodeData = nodeData.concat(this.postOrderTraversal(root.rightChild));
    nodeData.push(root.data);
    return nodeData;
  }

  heightOfAvlTree(root: AvlTreeNode): number {
    if (root === null) return 0;
    let lHeight = this.heightOfAvlTree(root.leftChild) + 1;
    let rHeight = this.heightOfAvlTree(root.rightChild) + 1;
    return Helper.maximum(lHeight, rHeight);
  }

  totalNodesCount(root: AvlTreeNode): number {
    if (root === null) return 0;
    let count = 1;
    count += this.totalNodesCount(root.leftChild);
    count += this.totalNodesCount(root.rightChild);
    return count;
  }
}
