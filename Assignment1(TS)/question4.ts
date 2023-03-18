function Chkprime (No1 : number) : void
{
    if(No1%1==0 && No1%No1==0)
    {
        console.log("It is prime number...");
    }
    else
    {
        console.log("It is not prime number...")
    }
}

var A : number =11;

Chkprime(11);