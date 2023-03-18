function maximum(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
console.log(maximum(numbers)); // Output: 89
