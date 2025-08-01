//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
function averagePair(arr, num){
  let min=0;
  let max=arr.length-1;
  while(min<max){
    if((arr[min]+arr[max])/2===num){
      return true
    } else if((arr[min]+arr[max])/2<num){
      min++;
    } else{
      max--;
    }
  }
  return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false