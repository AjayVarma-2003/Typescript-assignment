function maximum(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
  console.log(maximum(numbers)); // Output: 89
  