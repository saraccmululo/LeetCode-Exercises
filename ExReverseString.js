var reverseString = function(s) {
    let i=0;
    let j=s.length-1;
    let k;
    while(i<j){
      k=s[i];
      s[i]=s[j];
      s[j]=k;
      [s[i], s[j]]=[s[j], s[i]]//destructuring to swap values directly without the need of creating a third variable.
      i++;
      j--;
    }
    return s
};
const s = ["h","e","l","l","o"]
console.log(reverseString(s))