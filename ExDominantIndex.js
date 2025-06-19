var dominantIndex = function(nums) {
  let maxNum=-infinity //OR nums[0];
  let maxIndex=0;
    for(let i=0; i<nums.length; i++) {
      if(nums[i]>maxNum){
        maxNum=nums[i];
        maxIndex=i;
      }
      console.log(maxNum, maxIndex);
    }
    for(let i=0; i<nums.length; i++){
      if(i===maxIndex){
        continue;
      }
      if(maxNum<nums[i]*2){//OR if(i!==maxIndex && maxNum<nums[i]*2)
        return -1
      }
    }
    return maxIndex;
  }
const nums = [3,6,1,0]
console.log(dominantIndex(nums))


//ONE LOOP SOLUTION:  
var dominantIndex = function(nums) {
  let max = -Infinity;
  let secondMax = -Infinity;
  let maxIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  return max >= 2 * secondMax ? maxIndex : -1;
};
