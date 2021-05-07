function powerDigitSum(exponent) {
  const size = 500;
  const ans = new Array(size).fill(0);
  ans[0] = 1;
  for (let i = 1; i <= exponent; i++) {
    let carry = 0;
    for (let j = 0; j < size; j++) {
      const prod = ans[j] * 2 + carry;
      ans[j] = prod % 10;
      carry = parseInt(prod / 10);
    }
  }
  return ans.reduce((dig, cur) => dig + cur, 0);
}

console.log(powerDigitSum(15));
