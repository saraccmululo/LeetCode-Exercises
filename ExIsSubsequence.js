//Takes in two strings and checks whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
let i=0;//pointer on the first string (to track the current character you need to match).
let j=0;//pointer on the second string (to scan through it).

while(i<str1.length && j<str2.length) {//to keep i and j inside arr boundaries
  if(str1[i]===str2[j]){
    i++;//if characters match, move first string pointer forward (you found the current character you needed).
    j++;//Always move second string pointer forward regardless (you are scanning the sequence).
  } else {
    j++;
  }
}//Your while loop ends when i < str1.length is no longer true (meaning i === str1.length).
return i===str1.length? true:false;//If you successfully moved i to the end of str1, you found all characters in order → return true.
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)