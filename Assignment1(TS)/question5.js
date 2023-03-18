function Fibonacci(n) {
    var num1 = 0;
    var num2 = 1;
    var nextTerm;
    console.log("Fibonacci Series:");
    for (var i = 1; i <= n; i++) {
        console.log(num2);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }
}
Fibonacci(21);
