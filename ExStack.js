//STACK - the last element added will be the first one retrieved/removed from the stack.
//STACK with Singly Linked List model-adding to the beginning (unshift()) and removing from the beginning(shift()): O(1).
class Node{
  constructor(val){
    this.val=val;
    this.next=null;
  }
}
class Stack{
  constructor(){
    this.first=null;
  this.last=null;
  this.size=0;
  }
  push(val){//this code is in fact an unshift() because it adds to the beginning but it's called here "push()" by the Stack convention
    let newNode= new Node(val);
    if(!this.first){
      this.first=newNode;
      this.last=newNode;
    } else{
     newNode.next=this.first;
     this.first=newNode;
    }
    this.size++;
    return this.size;
  }
  pop(){// this code is in fact a shift() because it removes from the begin
    if(!this.first) return null;
    let removedNode=this.first;
    if(this.size===1){ //OR if(this.frist===this.last)
      this.first=null;
      this.last=null;
    } else {
      this.first=removedNode.next;//this.first.next
    }
    this.size--;
    return removedNode.value;
  }
  /* OR
  pop() {
  if (!this.first) return null;

  let removedNode = this.first;
  this.first = removedNode.next;
  this.size--;

  if (this.size === 0) {
    this.last = null;
  }

  return removedNode.value;
} */

}

//Calling the Stack:
const stack= new Stack();
stack.push('First');
stack.push('second');
stack.push('third');
stack.pop()//"third"