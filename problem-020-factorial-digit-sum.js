const factorial = (n) => {
  const ans = new Array(250).fill(0);
  ans[0] = 1;
  let i = 1;
  while (i <= n) {
    let carry = 0;
    let j = 0;
    while (j < 250) {
      const val = ans[j] * i + carry;
      ans[j] = val % 10;
      carry = parseInt(val / 10);
      j++;
    }
    i++;
  }
  return ans;
};

function sumFactorialDigits(n) {
  const fact = factorial(n);
  return fact.reduce((ans, cur) => ans + cur, 0);
}

sumFactorialDigits(100);

const ans = sumFactorialDigits(10);
console.log(ans);
