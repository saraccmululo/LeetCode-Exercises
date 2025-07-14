//Return true if there is al least one number in the second array that is the square of a number in the first array.

function same(arr1, arr2) {
  if(arr1.length !==arr2.length){
    return false;
  }
    for(let i=0; i<arr1.length; i++) {
        let arr2Index=arr2.indexOf(arr1[i]**2)//let squareArr1=arr1[i]**2;
        if(arr2Index===-1) {//if(arr2.indexOf(squareArr1)===-1){
            return false;
        }
        arr2.splice(arr2Index,1);//arr2.splice(arr2.indexOf(squareArr1), 1)
    }
    return true
}

console.log(same([1,2,3,2], [9,1,4,4]));//true (2 and 4)



