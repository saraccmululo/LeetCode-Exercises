
//Solution using regular for loop:
var findNumbers = function(nums) {
  let numCount=0;
    for(let i=0; i<nums.length; i++){
      const numDigit= nums[i].toString().length;
        if(numDigit %2===0) {
          numCount++
        }
      }return numCount;
};

nums = [12,345,2,6,7896]
console.log(findNumbers(nums))

//Solution using .filter()
var findNumbers = function(nums) {
  const evenNumbers=nums.filter(num=>num.toString().length %2===0)
   return evenNumbers.length;
};

const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums)); // Output: 2

