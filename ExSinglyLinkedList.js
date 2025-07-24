class Node {
  //PROPERTIES OF THE INSTANTIATED OBJECTS
  constructor(val){
    this.val=val;
    this.next=null;
  }
}

class SinglyLinkedList {
  //PROPERTIES OF THE INSTANTIATED OBJECTS
  constructor() { 
    this.head=null;
    this.tail=null;
    this.length=0;
  }
//METHODS OF THE INSTANTIATED OBJECTS
  push(val) {
    const newNode= new Node(val);
    if(!this.head) { // if the list is empty, add the 1st node that will be the head and the tail at the same time.
      this.head=newNode;
      this.tail=this.head;//head and tail will be the same thing for the 1st element.
    } else { //if list is not empty, add another element/node:
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    let current= this.head;//both current element and new tail will start as the first element/head.
    let newTail=current;

    while(current.next){//while proximo elemento existir, make newTail ficar no lugar de current and then move  current forward to the next element (newTail will always lag behind current).
      newTail= current;
      current=current.next;
    }
    this.tail=newTail;
    this.tail.next=null;//removes current from the list
    this.length--; //updates the list length
    if(this.length===0){// if list is empty, reset head and tail to be null.
      this.head=null;
      this.tail=null;
    }
    return current;//returns the element that was removed (current in this case)
  }
}