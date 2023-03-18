function Area (radius : number) : number 
{
    const PI = 3.14;
    
    var B : number = 0;

    B = PI * radius * radius;

    return B;
}

var A : number = 0;

A = Area(5);

console.log("Area is : "+A);