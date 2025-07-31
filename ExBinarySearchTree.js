//BINARY SEARCH TREE - consists of nodes in a parent/child relationship. Every parent has at most 2 children. Every node to the left of a parent is always less than the parent and the right child is always greater than the parent.

class Node {
  constructor(val) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root; //starts as root and updates as we go.
    while (true) {
      if ((value === current.value)) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (current.right === null) {
        current.right = newNode;
        return this;
      } else {
        current = current.right;
      }
    }
  }

  find(value){
    if(this.root===null) return false;
    let current=this.root;//start the loop through the first value(root)
    let found=false;
    while(current&&!found){// while there is smt to loop over (current is not null) and we have not found the value yet(found is false)-this avoid an infinite loop of keeping searching for a node that doesnt exist. 
      if(value<current.value){
        current=current.left;//update current to be the next node.
      } else if(value>current.value){
        current=current.right;
      } else {
        found=true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  contains(value){
    if(this.root===null) return false;
    let current=this.root;//start the loop through the first value(root)
    let found=false;
    while(current&&!found){// while there is smt to loop over (current is not null) and we have not found the value yet(found is false)-this avoid an infinite loop of keeping searching for a node that doesnt exist. 
      if(value<current.value){
        current=current.left;//update current to be the next node.
      } else if(value>current.value){
        current=current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
//TREE example:
//       10
//    5      13
//  2  7   11  16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
