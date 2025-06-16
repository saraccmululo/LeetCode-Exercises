//NESTED LOOP SOLUTION:
var thirdMax = function (nums) {
  if (nums.length === 0) return 0;
    let i = 0;
    while (i < nums.length) {
      let j = i + 1;
      while (j < nums.length) {
        if (nums[i] === nums[j]) {
          nums.splice(j, 1); //remove the duplicates from the array
        } else {
          j++;
        }
      }
      i++;
    }
    nums.sort((a, b) => b - a);
      return nums.length>=3? nums[2]:nums[0];//If we have at least 3 distinct numbers, return the 3rd max. Otherwise, return the largest (1st max)
  }

nums = [2, 2, 3, 1];
console.log(thirdMax(nums));

//SET+SORT SOLUTION:
var thirdMax = function (nums) {
  const uniqueNums = [...new Set(nums)];// Set remove duplicates. [...] converts Set into an array.
  uniqueNums.sort((a, b) => b - a);// Sort in descending order
 
  return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0]; // array length more than 3 return the 3rd max number. Less than 3 return the largest num.
};
