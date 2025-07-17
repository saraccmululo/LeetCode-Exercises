function findAllDuplicates(arr){
  let lookup={};
  let result=[];
  for(let num of arr){
    lookup[num]=(lookup[num]||0) +1;
  }
  for(let key in lookup){
    if(lookup[key]>1){
      result.push(Number(key))
    }
  }
  return result
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
/* 4:1
3:2
2:2
7:1
8:1
3:1
1:1 */
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1

//SIMPLER SOLUTION:
function findAllDuplicates(arr) {
  const lookup = {};
  const result = [];

  for (let num of arr) {
    lookup[num] = (lookup[num] || 0) + 1;
    if (lookup[num] === 2) {
      result.push(num);
    }
  }

  return result;
}

//USING NEW SET SOLUTION:
function findAllDuplicates(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i])
  }
  return ans;
}