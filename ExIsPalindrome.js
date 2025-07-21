//A palindrome is a string that reads the same forward and backward, e.g.:"madam" ✅ "racecar" ✅ "hello". Given a string, return true if it is a palindrome, false otherwise.”

//TWO POINTERS SOLUTION:
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
    } 
  return true;
}

console.log(isPalindrome("madam"));//true
console.log(isPalindrome("racecar"));//true
console.log(isPalindrome("hello"));//false
