var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

//LOOPING SOLUTION

function subStr(haystack, needle) {
    const h = haystack.length;
    const n = needle.length;

    for (let i=0; i<=h-n; i++){
      const substring=haystack.substring(i, i+n);
      if(substring===needle){
        return i;//found
      }
    }
    return -1//not found
}
// Example:
console.log(strStr("hello", "ll")); // 2
console.log(strStr("abcdef", "gh")); // -1
console.log(strStr("abc", "")); // 0