var ChkArmstrong = function (number) {
    var digits = number.toString().split('');
    var numDigits = digits.length;
    var sum = 0;
    for (var i = 0; i < numDigits; i++) {
        var digit = Number(digits[i]);
        sum += Math.pow(digit, numDigits);
    }
    return sum === number;
};
var number = 153;
if (ChkArmstrong(number)) {
    console.log("Number is Armstrong number...");
} // Output: true
