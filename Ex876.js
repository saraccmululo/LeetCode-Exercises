//First version: length/counting method-count the nodes, then access the middle.

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

//Second version: 2 pointers (fast and slow).

var middleNode = function(head) {
  let count = 0;
  let current = head;

  // First pass: count nodes
  while (current) {
    count++;
    current = current.next;
  }

  // Middle index: calculates how far the middle is 
  let middle = Math.floor(count / 2);

  // Second pass: get to the middle node value
  current = head;
  for (let i = 0; i < middle; i++) {
    current = current.next;
  }

  return current;
};
