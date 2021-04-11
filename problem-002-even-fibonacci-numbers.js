function fiboEvenSum(n) {
  let a = 0,
    b = 1;
  let ans = 0,
    c = 0;
  while (c <= n) {
    c = a + b;
    a = b;
    b = c;
    if (c % 2 == 0) {
      ans += c;
    }
  }
  return ans;
}

console.log(fiboEvenSum(34));
