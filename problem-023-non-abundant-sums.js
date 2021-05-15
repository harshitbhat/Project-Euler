const properDivisorsSum = (n) => {
  let res = 1;
  let i = 2;
  while (i * i <= n) {
    if (n % i == 0) {
      res += i;
      if (i * i != n) {
        res += parseInt(n / i);
      }
    }
    i++;
  }
  return res;
};

const abundantNumbers = [];

const createAbundantNumbers = (n) => {
  for (let i = 12; i <= n; i++) {
    if (properDivisorsSum(i) > i) {
      abundantNumbers.push(i);
    }
  }
};

const nonAbundantSumNumbers = {};

const nonAbundantSumNumbersFill = () => {
  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = 0; j < abundantNumbers.length; j++) {
      if (abundantNumbers[i] + abundantNumbers[j] < 28150) {
        nonAbundantSumNumbers[abundantNumbers[i] + abundantNumbers[j]] = true;
      }
    }
  }
};

function sumOfNonAbundantNumbers(n) {
  let ans = 0;
  createAbundantNumbers(n);
  nonAbundantSumNumbersFill();
  for (let i = 1; i <= n; i++) {
    if (!nonAbundantSumNumbers[i]) {
      ans += i;
    }
  }
  return ans;
}

sumOfNonAbundantNumbers(28123);
