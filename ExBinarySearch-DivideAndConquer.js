function binarySearch(arr, val){
let left=0;
let right=arr.length-1;
while(left<=right){
  let average=Math.floor((left+right)/2);
  if(val===arr[average]) return average
  if(val>arr[average]) left=average+1;
  if(val<arr[average]) right=average-1;
}
return -1
}

console.log(binarySearch([1,2,3,4,5,6,7],5))