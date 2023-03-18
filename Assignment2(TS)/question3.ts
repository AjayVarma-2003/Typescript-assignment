function secondLargest(numbers: number[]): number {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secondMax = max;
      max = numbers[i];
    } else if (numbers[i] > secondMax && numbers[i] !== max) {
      secondMax = numbers[i];
    }
  }

  return secondMax;
}

const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
console.log(secondLargest(numbers)); // Output: 77
