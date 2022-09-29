import { TrieNode } from "../../../Shared/class/trie-node";

export class Trie {
    root: TrieNode;

    constructor(){
        this.root = new TrieNode();
    }

    createTrie(keys: string[]): void{
      keys.forEach(key => this.insertKey(key));
    }

    insertKey(key: string): void {
      key = key.toLowerCase();
      let node = this.root;
      for(let level = 0; level < key.length; level++) {
        const index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
        if(node.children[index]=== undefined){
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
      }
      node.isLeafNode = true;
    }
    
    searchKey(key: string): boolean {
        key = key.toLowerCase();
        let node = this.root;
        for(let level = 0; level < key.length; level++) {
            const index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
            if(node.children[index]=== undefined){
                return false;
            }
            node = node.children[index];
        }
        return node.isLeafNode;
    }
}
