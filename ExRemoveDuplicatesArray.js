//Solution using .splice():
var removeDuplicates = function(nums) {
    let i=1;
    while(i<nums.length){
      if(nums[i]===nums[i-1]) {
        nums.splice(i,1);
      }else{
        i++
      }
    }
    const k= nums.length;
    return k;
};

//Solution using two pointers(more efficient):
var removeDuplicates = function(nums) {
  if(nums.length===0) return 0;
  let k=1;
  for(let i=1; i<nums.length; i++){
    if (nums[i]!==nums[i-1]) { //Unique — copy to nums[k], Duplicate — do nothing.
      nums[k] ==nums[i];
      k++;
    }
  }
  return k;
}

nums = [1, 1, 2, 3, 3, 4];
console.log(removeDuplicates(nums));