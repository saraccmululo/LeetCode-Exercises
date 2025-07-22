function productOfArray(arr) {
  if (arr.length === 0) return 1; // base case: multiply by 1 doesn't change the product.
  return arr[0] * productOfArray(arr.slice(1));
  //1st call:productOfArray([1, 2, 3])--1 * productOfArray([2,3]);
  // 2nd call: productOfArray([2,3])--2* productOfArray([3]);
  // 3rd call: productOfArray([3])--3* productOfArray([]); 
  // 4th call: productOfArray([])--base case return 1
  
//Now, the recursive calls resolve backward:
//productOfArray([]) returns 1
//productOfArray([3]) returns 3 * 1 = 3
//productOfArray([2, 3]) returns 2 * 3 = 6
//productOfArray([1, 2, 3]) returns 1 * 6 = 6
//✅ Final result: 6
}


console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60