
//MERGE SORT
// 1st part: Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr){
  if(arr.length<=1) return arr;
  let mid=Math.floor(arr.length/2);
  let left=mergeSort(arr.slice(0,mid));
  let right=mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(merge([100,200], [1,2,3,5,6]));
