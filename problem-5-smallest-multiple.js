const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const lcm = (a, b) => {
  return Number((a * b) / gcd(a, b));
};

function smallestMult(n) {
  let ans = 2;
  for (let i = 3; i <= n; i++) {
    ans = lcm(ans, i);
  }
  return ans;
}

console.log(smallestMult(10));
