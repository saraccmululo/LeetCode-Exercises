//Bubble Sort compares each pair of adjacent elements and swaps them if they are in the wrong order.After one full pass, the largest element is guaranteed to be at the end of the array.

function bubbleSort(arr) {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){//-1:the largest valid j is arr.length - 1 (so arr[j + 1] is within bounds).-i:to avoid the last comparison after each loop since the last element is already sorted after each loop.
      if(arr[j]>arr[j+1]){//swap the values
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}
console.log(bubbleSort([37,45,29,8]));
console.log(bubbleSort([8,1,2,3,4,5,6,7]));

//OPTIMIZED SOLUTION with noSwap variable.
function bubbleSort(arr) {
  let noSwaps;
  for(let i=0; i<arr.length; i++){
    noSwaps=true;
    for(let j=0; j<arr.length-i-1; j++){//-1:the largest valid j is arr.length - 1 (so arr[j + 1] is within bounds).-i:to avoid the last comparison after each loop since the last element is already sorted after each loop.
      if(arr[j]>arr[j+1]){//swap the values
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
        noSwaps=false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
