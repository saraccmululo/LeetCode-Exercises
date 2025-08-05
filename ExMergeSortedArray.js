var merge = function(nums1, m, nums2, n) {
    const filterNums1=nums1.slice(0, m);
    const filterNums2=nums2.slice(0, n);
    const mergedArr=filterNums1.concat(filterNums2).sort((a,b)=> a-b);

    for(let i=0; i<nums1.length; i++) {
      nums1[i]=mergedArr[i];
    }
};


nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1, m, nums2, n);
console.log(nums1)

//Output: [1,2,2,3,5,6]