import { BinaryTreeNode } from '../../../Shared/class/binary-tree-node';
import { ParentChildNode } from '../../../Shared/Interface/interface';

export class BinarySearchTree {
  root: BinaryTreeNode | any;
  findNode: BinaryTreeNode | any;
  parentNode: BinaryTreeNode | any;

  constructor() {
    this.root = null;
    this.findNode = null;
    this.parentNode = null;
  }

  createBinarySearchTree(arr: number[], isSortedArray: boolean): void {
    this.root = null;
    if (isSortedArray) {
      this.root = this.constructBStFromSortedArray(arr, 0, arr.length - 1);
    } else {
      arr.forEach(element => {
        this.root = this.insertNode(this.root, element);
      });
    }
  }

  constructBStFromSortedArray(
    arr: number[],
    startIndex: number,
    endIndex: number
  ): BinaryTreeNode | null {
    if (startIndex > endIndex) return null;
    const mid = Math.floor((startIndex + endIndex) / 2);
    const node = new BinaryTreeNode(arr[mid]);
    node.leftChild = this.constructBStFromSortedArray(arr, startIndex, mid - 1);
    node.rightChild = this.constructBStFromSortedArray(arr, mid + 1, endIndex);
    return node;
  }

  insertNode(node: BinaryTreeNode, element: number): BinaryTreeNode {
    if (node === null) {
      return new BinaryTreeNode(element);
    } else if (node.data > element) {
      node.leftChild = this.insertNode(node.leftChild, element);
    } else {
      node.rightChild = this.insertNode(node.rightChild, element);
    }
    return node;
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

  minimumNode(
    node: BinaryTreeNode,
    parentNode: BinaryTreeNode
  ): ParentChildNode {
    if (node.leftChild === null) {
      return {
        parent: parentNode,
        node: node,
      };
    } else {
      return this.minimumNode(node.leftChild, node);
    }
  }

  findDeleteNode(
    node: BinaryTreeNode,
    parentNode: BinaryTreeNode | null,
    key: number
  ): ParentChildNode {
    if (node.data === key || node === null) {
      return {
        parent: parentNode,
        node: node,
      };
    } else if (key > node.data) {
      return this.findDeleteNode(node.rightChild, node, key);
    } else {
      return this.findDeleteNode(node.leftChild, node, key);
    }
  }

  deleteNode(key: number): void {
    const deleteNode = this.findDeleteNode(this.root, null, key);
    if (deleteNode.node === null) {
      return;
    }
    if (
      deleteNode.node.leftChild === null &&
      deleteNode.node.rightChild === null
    ) {
      if (deleteNode.parent?.leftChild === deleteNode.node) {
        deleteNode.parent.leftChild = null;
      } else {
        deleteNode.parent!.rightChild = null;
      }
    } else if (deleteNode.node.leftChild === null) {
      if (deleteNode.parent?.leftChild === deleteNode.node) {
        deleteNode.parent.leftChild = deleteNode.node.rightChild;
      } else {
        deleteNode.parent!.rightChild = deleteNode.node.rightChild;
      }
    } else if (deleteNode.node.rightChild === null) {
      if (deleteNode.parent?.leftChild === deleteNode.node) {
        deleteNode.parent.leftChild = deleteNode.node.leftChild;
      } else {
        deleteNode.parent!.rightChild = deleteNode.node.leftChild;
      }
    } else {
      const minimumNode = this.minimumNode(
        deleteNode.node.rightChild,
        deleteNode.node
      );
      if (minimumNode.parent === deleteNode.node) {
        minimumNode.node!.leftChild = deleteNode.node.leftChild;
        if (deleteNode.parent?.leftChild === deleteNode.node) {
          deleteNode.parent.leftChild = minimumNode.node;
        } else {
          deleteNode.parent!.rightChild = minimumNode.node;
        }
      } else {
        deleteNode.node.data = minimumNode.node!.data;
        minimumNode.parent!.leftChild = null;
      }
    }
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
}
