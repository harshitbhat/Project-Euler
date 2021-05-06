function solve(n) {
  if (n in stepsMap) {
    return stepsMap[n];
  }
  if (n == 1) {
    return 1;
  }
  const val = 1 + (n % 2 === 0 ? solve(n / 2) : solve(3 * n + 1));
  stepsMap[n] = val;
  return val;
}

function longestCollatzSequence(limit) {
  let longest = -1;
  let ans = 1;
  for (let i = 1; i <= limit; i++) {
    const steps = solve(i);
    if (steps > longest) {
      longest = steps;
      ans = i;
    }
  }
  return ans;
}

const stepsMap = {};
const ans = longestCollatzSequence(1000000);

console.log(ans);
