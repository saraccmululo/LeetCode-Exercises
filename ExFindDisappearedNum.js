
//SOLUTION USING .INCLUDE()
var findDisappearedNumbers = function (nums) {
  //1. create a new array with (n) size
  const n= nums.length;
  const fullArr = [];
  for (let i = 0; i < n; i++) {
    fullArr[i] = i + 1;
  }

  //2.loop through fullArr,if nums array not include element, push it to result array.
  const result = [];
  for (let i = 0; i < fullArr.length; i++) {
    if (!nums.includes(fullArr[i])) { 
      result.push(fullArr[i]);
    }
  }
  return result
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));

//full=[1,2,3,4,5,6,7,8];
//output:result=[5,6]

//OPTIMIZED SOLUTION USING SET: 
var findDisappeardNumbers = function (nums) {
  const numsSet=new Set(nums);
  const result=[];

  for(let i=1; i<=nums.length; i++) {//you're not looping over any array. You're just using the index to complete the numbers from 1 to n as the exercise asks.
    if(!numsSet.has(i)){
      result.push(i);
    }
  }
  return result
}

