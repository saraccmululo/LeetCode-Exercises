//Solution to modify array in place:
var removeElement = function(nums,val) {
  let k = 0;
    for (let i=0; i<nums.length; i++){
      if(nums[i]!==val){
        nums[k]=nums[i];
        k++;
      }
    }
    return k;
} 


//Solution to create a new array:
/* var removeElement = function(nums,val) {
  nums=nums.filter(num=>num!=val);
  const k=nums.length;
  return k;
} */


nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val));