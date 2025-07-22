function fib(n){
    if (n <= 2) return 1;//“If the position is 1 or 2, return 1. 
    return fib(n-1) + fib(n-2);//“The current Fibonacci number is the sum of the two previous Fibonacci numbers.”
}
console.log(fib(4)) //3 (the 4th fibonacci position/index is 3)
console.log(fib(10)) // 55 (the 10th fibonacci position/index is 55)
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465


//fib(n) = fib(n-1) + fib(n-2)---The current Fibonacci number is the sum of the two previous Fibonacci numbers.

/* 1️⃣ What the Fibonacci sequence is (in this definition):
1, 1, 2, 3, 5, 8, 13, ...
Position 1 → 1
Position 2 → 1
Position 3 → 2 (because 1 + 1)
Position 4 → 3 (because 1 + 2)
Position 5 → 5 (because 2 + 3)
Position 6 → 8 (because 3 + 5)

In other words:
fib(1) = 1
fib(2) = 1
fib(3) = fib(2) + fib(1) = 1 + 1 = 2
fib(4) = fib(3) + fib(2) = 2 + 1 = 3
fib(5) = fib(4) + fib(3) = 3 + 2 = 5

2️⃣ Why if (n <= 2) return 1; is used:
The Fibonacci sequence requires two starting points to build the rest.

In this version:
The first Fibonacci number (fib(1)) is 1.
The second Fibonacci number (fib(2)) is also 1.

✅ Because these are the two fixed starting values,
we tell the function to stop recursion and return 1 whenever n is 1 or 2.

3️⃣ Without this line, your recursion would never stop
If you don’t give a base case, the function keeps calling itself forever. */