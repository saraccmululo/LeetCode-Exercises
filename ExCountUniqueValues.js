//Return the count of unique numbers in this array
function countUniqueValues(arr){
  if(arr.length===0) return 0;

 let i=0;
 for(let j=1; j<arr.length; j++){
  if(arr[j]!==arr[i]){
    i++;
    arr[i]=arr[j];
  } 
 }
 return i+1//total count of unique numbers(+1 because starts on 0)
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))//7
console.log(countUniqueValues([]))//0