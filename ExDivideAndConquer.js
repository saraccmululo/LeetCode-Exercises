//Divide and Conquer Pattern
function search(arr, val) {
  let min=0;
  let max=arr.length-1;

  while(min<=max){
    let middle=Math.floor((min+max/2));
    let currentElement=arr[middle];
    if(currentElement<val){
      min=middle+1;
    } else if(currentElement>val){
      max=middle-1;
    } else {
      return middle;//return the index of the value.
    }
  }
  return -1;//value not found.
}
console.log(search([1,2,3,4,5,6],4))//3


/* Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.*/

//1)SOLUTION --Time Complexity - O(log n) -GREAT

function countZeroes(arr){
let min=0;
let max=arr.length-1;
  while(min<=max){
    let middle=Math.floor((min+max)/2);
    let currentElement=arr[middle];
    if(currentElement===0){
      if(middle===0||arr[middle-1]===1){//check if it's the first zero
        return arr.length-middle;
    }else{ //if it's not the first zero, move max to the left of the arr to try to find the first zero.
      max=middle-1;
    }
  }else{//if it's one, move min to the right of the arr to try to find the zeros.
    min=middle+1;
  }
}
return 0; //no zeroes found
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0


//2 SOLUTION---Time Complexity - O(n) -NOT GREAT
// loops through the entire array, so it's not so efficient as the solution above which is O(log n).

function countZeroes(arr){
  let zeroCount=0;
  for(let element of arr){
    if(element===0){
      zeroCount+=1
    }
  }
  return zeroCount;
}
console.log(countZeroes([1,1,1,1,0,0]))//2