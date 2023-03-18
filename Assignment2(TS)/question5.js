var ChkString = function (str) {
    var regex = /Marvellous/i;
    return regex.test(str);
};
var str = "Pune Kothrud Marvellous Infosystem";
if (ChkString(str)) {
    console.log("string contain Marvellous in it ...");
} // Output: true
else {
    console.log("String dont contain Marvellous in it ...");
}
