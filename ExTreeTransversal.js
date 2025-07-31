class Node {
  constructor(val) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  breadthFirstSearch() {
    let data = [],
      queue = [],
      node = this.root; //start transversing from the 1st element (root).
    queue.push(node); //add root (1st element) to the queue array
    while (queue.length) {
      //while there is something in the queue
      node = queue.shift(); //remove from the beginning of the queue and save the visited element
      data.push(node.value); //add visited element to the data array to be returned later
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  //TREE example:
  //       10
  //    6     15
  //  3  8      20

  /* 1st Loop:
  QUEUE:[6,15]
  DATA:[10] 
  
  2nd Loop:
  QUEUE:[15, 3, 8]
  DATA:[10,6]

  etc...
  */

  /* Calling the breadthFirstSearch method:
 const tree= new Tree()
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);
  
  tree.breadthFirstSearch() */
  //Output: [10,6,15,3,8,20]

  depthFirstSearchPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  //TREE example:
  //       10
  //    6     15
  //  3  8      20

  /* Calling the depthFirstSearchPreOrder method:
const tree= new Tree()
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);
tree.depthFirstSearchPreOrder() */ //output: [10,6,3,8,15,20]

  depthFirstSearchPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  /* Calling the depthFirstSearchPostOrder method:
  const tree= new Tree()
  tree.depthFirstSearchPostOrder() */ //output: [3,8,6,20,15,10]

  depthFirstSearchInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
      
    }
    traverse(this.root);
    return data;
  }
  /* Calling the depthFirstSearchInOrder method:
  const tree= new Tree()
  tree.depthFirstSearchInOrder() */ //output: [3,6,8,10,15,20]
}
