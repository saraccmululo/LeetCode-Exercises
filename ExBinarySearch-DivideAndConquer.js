function binarySearch(arr, val){
let left=0;
let right=arr.length-1;
while(left<=right){//includes the case when left === right, allowing us to check the last remaining element.
  let averageIndex=Math.floor((left+right)/2);
  if(val===arr[averageIndex]) return averageIndex
  if(val>arr[averageIndex]) left=averageIndex+1;
  if(val<arr[averageIndex]) right=averageIndex-1;
}
return -1
}

console.log(binarySearch([1,2,3,4,5,6,7],5))