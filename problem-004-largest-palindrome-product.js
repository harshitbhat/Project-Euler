const isPlaindrome = (n) => {
  return n === Number(String(n).split('').reverse().join(''));
};

const smallestNDigitNumber = (n) => {
  return Number('1' + new Array(n - 1).fill('0').join(''));
};

const largestNDigitNumber = (n) => {
  return Number(new Array(n).fill('9').join(''));
};

function largestPalindromeProduct(n) {
  const start = smallestNDigitNumber(n);
  const end = largestNDigitNumber(n);
  let ans = 0;
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      if (isPlaindrome(i * j) && i * j > ans) {
        ans = i * j;
      }
    }
  }
  return ans;
}

console.log(largestPalindromeProduct(3));
