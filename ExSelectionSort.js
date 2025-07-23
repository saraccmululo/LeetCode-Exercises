//SELECTION SORT--It repeatedly finds the smallest element in the unsorted part of the array. Then it swaps it to the correct position at the beginning. It repeats this until the entire array is sorted in ascending order.


function selectionSort(arr) {
  for(let i=0; i<arr.length; i++){
    let lowest=i;// Assume the first index has the lowest value (the computer doesn't know better)
    for (let j=i+1; j<arr.length;j++){
      if(arr[j]<arr[lowest]){
        lowest=j;// Found a new lower value at index j
      }
    }
    // If lowest is diff than i, swap them. It avoids unnecessary swaps if i is equal to lowest (is already the smallest).
    if(i!==lowest) [arr[lowest],arr[i]]=[arr[i], arr[lowest]];
  }
  return arr
}

console.log(selectionSort([34,22,10,19,17]))