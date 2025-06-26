  //MORE EFFECTIVE SOLUTION:

  const plus1 = (nums)=> {
    for(let i=nums.length-1; i>=0; i--){
      if(nums[i]<9){
        nums[i]++
        return nums;
      } 
      nums[i]=0;
    }
     nums.unshift(1);
     return nums
  }
  const nums=[9,9,9];
  console.log(plus1(nums));
  
  
  //FIRST VERSION IN MIND (not efficient)
  const plusOne = (digits)=> {
  const str=digits.join("");//"123"
  const num=Number(str);//123
  const addOne=num+1;//124
  const strArr=String(addOne).split("");//["1", "2", "4"]
  const numArr=strArr.map(Number); //[1,2,4]

  return numArr;

}
const digits=[1,2,3];
console.log(plusOne(digits));  //[1,2,4]



 