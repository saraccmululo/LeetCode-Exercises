var moveZeroes = function(nums){
  let k=0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]!==0){
      nums[k]=nums[i];
      k++;
  }
  }
  console.log(k)
  for(let i=k; i<nums.length; i++){
    nums[i]=0;
  }
  return nums
}
const nums = [0,1,0,3,12]
const num = [0]
console.log(moveZeroes(nums))//Output:[1,3,12,0,0]
console.log(moveZeroes(num))//Output: [0]