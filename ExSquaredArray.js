//Using for loop version:
var sortedSquares = function(nums) {
  for(let i=0; i<nums.length; i++) {
    nums[i]= nums[i]**2;
  }
  return nums.sort((a,b)=> a-b);
};

nums=[-4,-1,0,3,10];
console.log(sortedSquares(nums));

//Using .map() version:
var sortedSquares = function(nums) {
  return nums.map(num=>num**2).sort((a,b)=>a-b);
}

nums=[-4,-1,0,3,10];
console.log(sortedSquares(nums));