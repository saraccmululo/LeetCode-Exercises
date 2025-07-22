function recursiveRange(n) {
  if(n===0) return 0;
  return n + recursiveRange(n-1)
}

console.log(recursiveRange(6)) // 21
//1+2+3+4+5+6

//6+recursive(5)=6+15
//5+recursive(4)=5+10
//4+recursive(3)=4+6
//3+recursive(2)=3+3
//2+recursive(1)=2+1
//1+recursive(0)=1+0
console.log(recursiveRange(10)) // 55 