//ON2 complexity (nested loops with indexOf)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let str2Index = str2.indexOf(str1[i]);
    if (str2Index === -1) {
      return false;
    }
    str2 = str2.slice(0, str2Index) + str2.slice(str2Index + 1);
  }
  return true;
}

console.log(validAnagram("aaz", "zza"));

//FREQUENCY COUNTER SOLUTION:
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //create a new object with the letter and its frequency as a value-pair.
  const lookup = {};
  for (char of str1) {
    //if letter exists, increment, otherwise set to 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1); //{a:3, n:1, g:1, r:1, m:1}
  }
  //Loop throufg string 2 and compare with string 1
  for(char of str2){
    if(!lookup[char]){
        return false;
    }
    lookup[char]=lookup[char]-1;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
