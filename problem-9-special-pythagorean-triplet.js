function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  let c = 0;
  let i = 2;
  let a, b;
  while (c < n) {
    for (let j = 1; j < i; j++) {
      a = i ** 2 - j ** 2;
      b = 2 * i * j;
      c = i ** 2 + j ** 2;
      if (c > n) {
        break;
      }
      if (a + b + c === sumOfabc) {
        return a * b * c;
      }
    }
    i += 1;
  }
  return -1;
}

specialPythagoreanTriplet(24);
