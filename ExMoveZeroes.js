function MoveZeroes (nums) {
 if(nums.length===0) return 0;
 let k=0;
 for(let i=0; i<nums.length; i++) {
  if(nums[i]!==0) {
    nums[k] = nums [i];
    k++
  }
 }

 for(let i=k; i<nums.length; i++) {
  nums[i]=0;
 }

 return nums
}

console.log(MoveZeroes([0,1,0,3,12]))
