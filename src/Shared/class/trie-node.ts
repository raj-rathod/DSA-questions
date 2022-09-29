import { ALPHABET_SIZE } from "../../Core/constant";

export class TrieNode {
    children: TrieNode[];
    isLeafNode: boolean;

    constructor() {
      this.children = new Array<TrieNode>(ALPHABET_SIZE);
      this.isLeafNode = false;
    }
  }
  