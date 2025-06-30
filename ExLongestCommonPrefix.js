var longestCommonPrefix=function(strs) {
  let prefix=strs[0]//consider the first string as the prefix
  for(let i=1; i<strs.length; i++){
    while(!strs[i].startsWith(prefix)) {// while current string doesn't start with prefix shorten prefix by removing last character until it fits or returns empty string.
      prefix=prefix.slice(0,-1);//returns new string slice starts at index 0 and -1 removes last character.
      if(prefix==="") return "";
    }
  }
  return prefix
}

const strs=["flower","flow","flight"]
console.log(longestCommonPrefix(strs))