//FREQUENCY COUNTER SOLUTION:
function areThereDuplicates(...args) {
  //...rest parameter converts arguments into an array.
  //create obj to store key-value pair of args elements:
  let lookup = {};
  //loop through the args array, if args element is not inside the object, create and give it 1(no duplicate so far). If a same one exists after that, return true for duplicates.
  for (let element of args) {
    if (lookup[element]) {
      return true;
    } else {
      lookup[element] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

//MULTIPLE POINTERS SOLUTION
function areThereDuplicatesWith2Pointers() {
  const args = Array.from(arguments); //transform arguments into args array.
  const sortedArray = args.sort((a, b) => a - b);
  //for sorted array, create  2 consecutive pointers for comparison
  let left = 0;
  let right = 1;
  while (right<sortedArray.length) {
    if (sortedArray[left] === sortedArray[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
}

//NEW SET SOLUTION
function areThereDuplicatesWithSet() {
  const newSet = new Set(arguments);
  if (newSet.size !== arguments.length) {
    return true;
  }
  return false;
}
