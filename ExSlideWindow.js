function maxSubarraySum(arr,num){
  if(arr.length<num) return null;
  let maxSum=0;
  for(let i=0; i<num; i++){
    maxSum+=arr[i];
  }
  let sum=maxSum;
  for(let i=num; i<arr.length;i++){
    sum=sum-arr[i-num]+arr[i];
    if(sum>maxSum){
      maxSum=sum;//maxSum=Math.max(maxSum, sum)
    }
  }
  return maxSum;
}

console.log (maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));//19


function again(arr, num){
  if(arr.length<num) return null;
  let maxSum=0;
  let sum=0;
  for(let i=0; i<num; i++) {
    maxSum=maxSum+arr[i];
  }
  sum=maxSum;
  for(let i=num; i<arr.length; i++){
    sum=sum+arr[i]-arr[i-num];
    if(sum>maxSum){
      maxSum=sum
    }
  }
  return maxSum;
}


console.log(again([100,200,300,400], 2));