const ChkArmstrong = (number: number): boolean => {
    const digits = number.toString().split('');
    const numDigits = digits.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      const digit = Number(digits[i]);
      sum += digit ** numDigits;
    }
  
    return sum === number;
  }
  
  const number = 153;
 if(ChkArmstrong(number))
 {
    console.log("Number is Armstrong number...");
 } // Output: true
  