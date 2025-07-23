//INSERTION SORT---It builds a sorted part on the left of the array. For each element, it shifts larger elements to the right until it finds the correct spot to insert the current value. It is efficient for small or nearly sorted arrays.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {//stop automatically when it finds the correct spot (arr[j] <= currentVal)
      arr[j + 1] = arr[j]; // shift right while arr[j] > currentVal
    }
    arr[j + 1] = currentVal; // insert currentVal in correct position
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));