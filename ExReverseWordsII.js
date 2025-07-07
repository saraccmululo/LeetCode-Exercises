var reverseWords = function(s) {
  let reversedArr=s.split(" ");//["Let's" "take" "LeetCode" "contest"]
  let i=0;
  for(let i=0; i<reversedArr.length; i++){
    reversedArr[i]=reversedArr[i].split("").reverse().join("");//transform each word into their own array so you can call.reverse() on it and then .join to bring it back to string. Result: ["s'teL", "ekat", "edoCteeL", "tsetnoc"]
  }
  return reversedArr.join(" ");// join whole array back into string. Result: "s'teL ekat edoCteeL tsetnoc"
};
const s = "Let's take LeetCode contest"
console.log(reverseWords(s))//"s'teL ekat edoCteeL tsetnoc"