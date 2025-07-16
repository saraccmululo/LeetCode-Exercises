function constructNote(message, letters) {
  //create object with key-value pairs containing the frequency of each letter
let lookup={};
for(let letter of letters){
  lookup[letter]? lookup[letter]+=1 : lookup[letter] =1;
}
//loop through message and compare with the lookup object that contain the letters and their frequency
for(let char of message) {
  if(lookup[char]){ //if the char from the message string exists in the lookup object remove one from its frequency
    lookup[char]-=1;
  } else { //if it's not found return false
    return false;
  }
} //if char is found with one frequency return true
return true
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true