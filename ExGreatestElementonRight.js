//Nested loop solution:
function replaceElements(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    arr[i] = max;
  }
  arr[arr.length - 1] = -1;
  return arr;
}

arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));

//Rserve loop optimized solution:
function replaceElements(arr) {
  let max = -1; // Last element becomes -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i]; // Save current value before overwriting
    arr[i] = max;    // Replace current with the greatest on its right
    if (current > max) {
      max = current;      // Update max for the next iteration
    }
  }
  return arr;
}

arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));