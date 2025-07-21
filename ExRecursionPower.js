//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

//RECURSION SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16

//ITERATION SOLUTION
function pow(num1, num2) {
 let result =1;
 for(let i=1; i<=num2;i++){//loop runs exponent times to control how many times the multiplication needs to be done.
    result=result*num1;
}
}
