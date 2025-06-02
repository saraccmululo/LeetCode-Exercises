var findMaxConsecutiveOnes = function(nums) {
  let oneCount=0;
  let maxCount=0;
  //nums.forEach(num=> {
  // if(num===1){
  // oneCount++;
  //if(oneCount>maxCount) {
    //maxCount=oneCount;
  // }
  //} else {
  //oneCount=0;
  //}
  // });
   // return maxCount;
//}
  for(let i=0; i<nums.length; i++) {
    if(nums[i]===1){
      oneCount++;
      if(oneCount>maxCount) {
      maxCount=oneCount;
      }
    } else {
      oneCount=0;
    }
  } 
  return oneCount
}


nums = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(nums));