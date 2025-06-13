var heightChecker = function(heights) {
  const heightsCopy=[...heights];//copy array before sort().
  //const heightsCopy= heights.slice(); --Also copies array.
   //const heightsCopy= Array.from(heights);-- Also copies array.
  const sortedHeightArr= heightsCopy.sort((a,b)=>a-b);//sort modifies the original array.
  console.log(sortedHeightArr);
  console.log(heights);
  let mismatchedIndex=0;
  for(let i=0; i<heights.length; i++) {
      if(heights[i]!==sortedHeightArr[i]) {
        mismatchedIndex++;
      }
    }
  return mismatchedIndex;
};

const heights = [1,1,4,2,1,3];
console.log(heightChecker(heights));

//output: [1,1,1,2,3,4]
