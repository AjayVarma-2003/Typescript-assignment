/*
Sir mala fibonnaci series kay ahe te mhit nahi 
ha code mala chatgpt varun ghetla pan hyancha logic mala bilkul nhi samjla ahe
ani output pan chukicha yet ahe..
*/


function Fibonacci(n: number): void {
    let num1: number = 0;
    let num2: number = 1;
    let nextTerm: number;
  
    console.log("Fibonacci Series:");
  
    for (let i = 1; i <= n; i++) {
      console.log(num1);
      nextTerm = num1 + num2;
      num1 = num2;
      num2 = nextTerm;
    }
  }
  

Fibonacci(21);
