//Solution using .splice():
var removeDuplicates = function(nums) {
  if (nums.length === 0) return [];
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

//similar result as above:
 let i=0;
    while(i<nums.length-1){
      if(nums[i]===nums[i+1]) {
        nums.splice(i+1,1);
      }else{
        i++
      }
    }
    const k= nums.length;
    return k;

//Solution using two pointers(more efficient):
var removeDuplicates = function(nums) {
  if(nums.length===0) return 0;
  let k=1; //K is the counter. K starts with 1 because the first number is always unique.
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

//Solution creating a new array (take extra space):
const uniqueSet=new Set(nums);
const setArray=Array.from(uniqueSet);
return setArray.length


