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


//Solution creating a new array:
/* var removeElement = function(nums,val) {
  nums=nums.filter(num=>num!=val);
  const k=nums.length;
  return k;
} */

nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums))
//Output: 5, nums = [0,1,4,0,3,_,_,_]

