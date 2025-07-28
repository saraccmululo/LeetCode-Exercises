class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newTail = new Node(val);
    if (!this.tail) {
      this.head = newTail;
      this.tail = newTail; //OR this.tail=this.head;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;
      this.tail = newTail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let oldTail = this.tail; //store current tail to return later. Put it before if checks so it's available everywhere to be returned later.
    if (this.length === 1) {
      //if there is just one element to be removed,just update head/tail to null.
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev; //tail now will be the previous node of the old tail.
      this.tail.next = null; //severs the connection with the old tail
      oldTail.prev = null; //severs the connection with the old tail
    }
    this.length--;
    return oldTail;
  }

  shift() {
    //remove first
    if (this.length === 0) return undefined;
    const oldHead = this.head; //store old head in a variable to be returned later
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next; //update the head to be the next of the old head
      this.head.prev = null; //severs the new head prev connection with the old head
      oldHead.next = null; //severs the old head next connection with the new head
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    //add node at beginning
    const newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = this.length / 2;
    let current;
    if (index < middle) {//start through the beginning(left-right)
      current=this.head;
      for (let i = 0; i !==index; i++) {
        current=current.next;
      }
    } else {//start from the end(right-left)
      current=this.tail;
      for (let i = this.length-1; i !==index; i--) {
        current=current.prev;
      }
    }
    return current;
  }
  /* OR USING WHILE LOOP:
if (index < 0 || index >= this.length) return null;
const middle = this.length / 2;
let count;
let current;
if(index<middle){
  count=0;
  current=this.head;
  while(count !==index){
    current=current.next;
    count++;
  }
} else {
  count=this.length-1;
  current=this.tail;
  while(count !==index) {
    current=current.prev;
    count--;
  }
  return current;
} */

set(index, val) {//replace the value of a node
  const foundNode=this.get(index);
  if (foundNode===null) return false;
  if(foundNode){
    foundNode.val=val;
    return true;
  } 
}

insert(index, val){
  if (index < 0 || index > this.length) return false;
  if(index===0) return !!this.unshift(val);//!! returns a boolean value
  if(index===this.length) return !!this.push(val);
  
  const newNode= new Node(val);//create new node
  const beforeNode=this.get(index-1);//find the node before the insertion
  const afterNode=beforeNode.next;//save the node that was originally after in a variable
  beforeNode.next=newNode;
  newNode.prev=beforeNode;
  newNode.next=afterNode;
  afterNode.prev=newNode;
  
  this.length++
  return true;
}

remove(index){
  if (index < 0 || index >= this.length) return undefined;
  if(index===0) return this.shift();
  if(index===this.length-1) return this.pop();

  const removeNode=this.get(index);
  let prevNode=removeNode.prev;
  let afterNode=removeNode.next;

  prevNode.next=afterNode;
  afterNode.prev= prevNode
  removeNode.next=null; removeNode.prev=null;
  
  this.length--;
  return removeNode;
}
}
  
//CALLING THE CLASS
const newList = new DoublyLinkedList();
newList.push(23);
newList.push(10);
newList.push(8);
newList.push(16);
newList.pop();
newList.shift();
newList.unshift(3);
newList.get(3);
newList.set(2, 17)
newList.insert(1, 5);
newList.remove(3);