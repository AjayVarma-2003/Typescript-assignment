function secondLargest(numbers) {
    var max = -Infinity;
    var secondMax = -Infinity;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            secondMax = max;
            max = numbers[i];
        }
        else if (numbers[i] > secondMax && numbers[i] !== max) {
            secondMax = numbers[i];
        }
    }
    return secondMax;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
console.log(secondLargest(numbers)); // Output: 77
