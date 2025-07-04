var rotate = function(nums, k){
  k=k%nums.length;//adjust k for cases where k> nums.length
  let rotated=[];
  for(let i=0; i<nums.length; i++) {
    let newIndex=((i+k) % nums.length);// calculate the new position with wrap-around
    rotated[newIndex]=nums[i]// place nums[i] at its rotated position
  }
   //Copy rotated array into nums for in-place modification
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i];
    }
}