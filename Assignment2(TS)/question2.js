function summation(Arr) {
    var Addition = 0;
    var i = 0;
    for (i = 0; i < week.length; i++) {
        Addition = Addition + Arr[i];
    }
    return Addition;
}
var week = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = summation(week);
console.log("Addition is : " + Ret);
