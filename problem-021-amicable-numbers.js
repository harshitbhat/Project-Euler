const divisors = (n) => {
  let i = 1;
  const divisors = [];
  while (i * i <= n) {
    if (n % i == 0) {
      divisors.push(i);
      if (i * i !== n && n / i != n) {
        divisors.push(parseInt(n / i));
      }
    }
    i++;
  }
  return divisors.sort((a, b) => a - b);
};

const d = (arr) => {
  return arr.reduce((sum, el) => sum + el, 0);
};

function sumAmicableNum(n) {
  const amicable = {};
  for (let i = 1; i <= n; i++) {
    if (!(i in amicable)) {
      const a = d(divisors(i));
      const b = d(divisors(a));
      if (a != i && b == i) {
        amicable[i] = true;
        amicable[a] = true;
      }
    }
  }
  let ans = 0;
  for (const key in amicable) {
    ans += parseInt(key);
  }
  console.log(ans);
  return ans;
}

sumAmicableNum(10000);
