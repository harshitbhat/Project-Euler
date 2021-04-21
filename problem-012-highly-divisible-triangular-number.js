const numberOfDivisors = (n) => {
  let ans = 0;
  let i = 1;
  while (i * i <= n) {
    if (n % i == 0) {
      ans++;
      if (i * i != n) {
        ans++;
      }
    }
    i++;
  }
  return ans;
};

function divisibleTriangleNumber(n) {
  let k = 1;
  for (let i = 1; ; i += k) {
    if (numberOfDivisors(i) >= n) {
      console.log(i);
      return i;
    }
    k++;
  }
  return true;
}

divisibleTriangleNumber(500);
