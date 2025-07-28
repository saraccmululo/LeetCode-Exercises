class Node {
  //PROPERTIES OF THE INSTANTIATED OBJECTS
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  //PROPERTIES OF THE INSTANTIATED OBJECTS
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //METHODS OF THE INSTANTIATED OBJECTS
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // if the list is empty, add the 1st node that will be the head and the tail at the same time.
      this.head = newNode;
      this.tail = this.head; //head and tail will be the same thing for the 1st element.
    } else {
      //if list is not empty, add another node at the end:
      this.tail.next = newNode;//make the connection from the second-to-last node to the new node (that is the last node now).
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {//needs to loop through the entire list to find the last node
    if (!this.head) return undefined;
    let current = this.head; //start looping through the head.Both current and new tail will start as the first/head element.
    let newTail = current;

    while (current.next) {//pára no penultimo elemento
      //while proximo elemento existir(está no penultimo), make newTail ficar no lugar de current and then move  current forward to the next element (newTail will always lag behind current).
      newTail = current; 
      current = current.next; 
    }//at the end of the loop, newTail will be at the penultimo elemento and current will be the last.
    this.tail = newTail;
    this.tail.next = null; //severs the link with the last element and removes it from the list
    this.length--; //updates the list length
    if (this.length === 0) {
      // if list is empty, reset head and tail to be null.
      this.head = null;
      this.tail = null;
    }
    return current; //returns the element that was removed (current in this case)
  }

  shift() {
    //remove the first node
    if (!this.head) return undefined;
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    if (this.length === 0) {
      // if list is empty, reset head and tail to be null.
      this.tail = null;
    }
    return removedHead;
  }

  unshift(val) {
    //add node to the beginning
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  get(index) {
    //find the node value of a specific index/position.
    if (index < 0 || index >= this.length) return null; //if position is negative or bigger than the link size return null.
    let counter = 0;
    let current = this.head; //start loop at the head node.
    while (counter !== index) {
      //OR while(counter<index)enquanto o counter nao chegou no index keep looping
      current = current.next; //move current forward one position at a time until iteration reaches index
      counter++;
    }
    return current;
  }

  set(val, index) {
    //change an existing value at a index or position
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    //insert a new node in the middle of the list
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {//insert in the end call push
      this.push(val);
      return true;
    }
    if (index === 0) {//insert in the beginning call unshift
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val); //created a new node

    let previousNode = this.get(index - 1); //gets the previous node right before the new node we want to insert.
    let temp = previousNode.next; //saves the connection of the previous node with the node that comes after it (.next is what connects them);
    previousNode.next = newNode; //connects previous node with new inserted node
    newNode.next = temp; //connects new node with the node that comes after it.
    this.length++;
    return true;
  }
  remove(index){
    if(index<0||index>=this.length) return undefined;
    if(index===this.length-1) return this.pop();
    if(index===0) return this.shift();

    let previousNode=this.get(index-1);
    let removedNode=previousNode.next;
    let afterNode=removedNode.next;
    previousNode.next=afterNode;
    this.length--;
    
    return removedNode;
  }

  reverse(){//reverse in place
    let node=this.head;
    this.head=this.tail;
    this.tail=node;
    //[this.head, this.tail]=[this.tail, this.head];
    let next;
    let previousNode=null;
    for(let i=0; i<this.length; i++){
      next=node.next;
      node.next=previousNode;
      
      previousNode=node;
      node=next;
    }
    return this;
  }
}
