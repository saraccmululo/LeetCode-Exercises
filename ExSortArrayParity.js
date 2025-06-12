var sortArrayByParity = function(nums) {
  let k=0;
  let oddArr=[];
  for(let i=0; i<nums.length; i++) {
    if(nums[i]%2===0){
      nums[k]=nums[i]
      k++
    } else {
      oddArr.push(nums[i]);
    }
  }
  for(let i=0; i<oddArr.length; i++) {
    nums[k]=oddArr[i];
    k++;
  }
  return nums;
};

nums = [3,1,2,4]
console.log(sortArrayByParity(nums))

//Solution using filter:
var sortArrayByParity = function(nums) {
  const evens= nums.filter(num=>num%2===0);
  const odds=nums.filter(num=>num%2!==0);
  return evens.concat(odds);
}
