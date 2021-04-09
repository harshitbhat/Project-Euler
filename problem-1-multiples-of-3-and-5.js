function multiplesOf3and5(number) {
  let ans = 0;
  for (let i = 2; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      ans += i;
    }
  }
  return ans;
}

multiplesOf3and5(1000);
