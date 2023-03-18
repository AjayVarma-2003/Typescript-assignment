function summation (Arr : number[]) :  number
{
    let Addition : number = 0;
    let i : number = 0;

    for(i=0 ; i < week.length;i++)
    {
        Addition = Addition +Arr[i];
    }
    
    return Addition;
}

var week : number[] = [23,6,7,4,5,7];

var Ret : number =0;

Ret = summation(week);

console.log("Addition is : "+Ret);