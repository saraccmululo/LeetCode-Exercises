var reverseWords = function(s) {
 const reversedArr=s.split(" ").filter(word=>word!="");//split creates new array from str, separator puts "" in each empty space.
 let i=0;
 let j=reversedArr.length-1;
 while(i<j) {
  [reversedArr[i],reversedArr[j]]=
  [reversedArr[j],reversedArr[i]];
  i++;
  j--;
 }
 s=reversedArr.join(" ");//string to array, separator in every empty space.
  return s;
};

const s = "the sky is blue";
console.log(reverseWords(s))//"blue is sky the"