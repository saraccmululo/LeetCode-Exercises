
var pivotIndex = function(nums) {
  let leftArr = [];
  let rightArr = [];

  // Build leftArr: sum of numbers before index i
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftSum;//not include index i itself, just before it
    leftSum = leftSum + nums[i];
  }//output:[0, 1, 8, 11, 17, 22]

  // Build rightArr: sum of numbers after index i
  let rightSum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightSum;
    rightSum += nums[i];
  }//output:[27, 20, 17, 11, 6, 0]


  // Now compare leftArr and rightArr
  for (let i = 0; i < nums.length; i++) {
    if (leftArr[i] === rightArr[i]) {
      return i;
    }
  }
  return -1; // no pivot index found
};

//Real-world analogy:
/* Imagine you're walking on a sidewalk (nums), and at each step i, you want to know how much ground you've already walked (sumLeft[i]) — you can only do that if you move forward.

If instead, you want to know how much is left to walk (sumRight[i]), you need to go from the end back toward the start, so at each index you’ve seen the "future" steps. */

const nums = [1,7,3,6,5,6]
console.log(pivotIndex(nums))

//OPTIMIZED SOLUTION  
var pivotIndex = function(nums) {
  let total=nums.reduce((acc,num)=>acc+num,0);
  let leftSum=0;

  for(let i=0; i<nums.length; i++) {
    let rightSum=total-leftSum-nums[i];//except the current number nums[i] because exercise asked to not include it(strictly to the left/right).
    if(leftSum===rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;//no pivot found
}

/*leftSum always reflects the sum before index i. 
Then you check against rightSum. 
Only after the check do you update leftSum to prepare for the next index.
--It’s a clever pattern: check before updating — and it’s exactly what makes the loop accurate for pivot index checking.  */