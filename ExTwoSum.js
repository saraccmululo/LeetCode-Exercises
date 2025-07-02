//TWO POINTERS TECHNIQUE
var twoAdd=function(n, t) {
  let i=0;
  let j=n.length-1;
  while(i<j) {
    if(n[i]+n[j]===t){
      return [i+1, j+1] //you can return array on the fly without creating one before.
    } else if(n[i]+n[j]>t) {
      j--
    } else {
      i++
    }
  }
}                               
const numbers = [2,7,11,15], target = 9
console.log(twoAdd(numbers, target)) //Output: [1,3]

//NESTED LOOPS SOLUTION (more time complexity)
var twoSum = function(n, t) {
  let result=[];
  for(let i=0; i<n.length; i++) {
    for(let j=i+1; j<n.length; j++){
      if(n[i]+n[j]===t){
      result.push(i+1,j+1);
      return result
    }
    }
  }
};
const n = [2,3,4], t = 6
console.log(twoSum(numbers, target)) //Output: [1,3]