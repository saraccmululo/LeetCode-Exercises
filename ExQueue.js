//QUEUE- the first element aded willl the the first removed. FIFO-first in first out(first come first served) methodology.
//QUEUE with Singly Linked List model-Adding to the end(called enqueue or push()) and removing from the beginning (called dequeue or shift()): O(1).
 
class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
 }

class Queue{
 constructor(){
  this.first=null;
  this.last=null;
  this.size=0;
 }
 enqueue(val){//push() add to the end
  let newNode= new Node(val);
  if(!this.first){
    this.first=newNode;
    this.last=newNode;
  } else {
    this.last.next=newNode;
    this.last=newNode;
  }
  this.size++;
  return this.size;
 }
 dequeue(){//shift() remove from beginning
  if(!this.first) return null;
  let removedNode=this.first;
  this.first=removedNode.next;
  this.size--;
  if(this.size===0){
    this.last=null;
  }
  return removedNode.value;
 }
 /* OR
 dequeue(){//shift() remove from beginning
  if(!this.first) return null;
  removedNode=this.first;
  if(this.first===this.last){ OR if(this.size===1)
    this.first=null;
    this.last=null;
  }
  this.first=this.first.next;
  this.size--;
  return removedNode.value */
}

//Calling the Queue class:
let q= new Queue();
q.enqueue("AFIRST");//first in
q.enqueue("BSECOND");
q.enqueue("CTHIRD");
q.dequeue()//"AFIRST"// first out