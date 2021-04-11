// Problem 10: Summation of primes
function isPrime(n) {
  if (n < 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let count = 5;
  while (Math.pow(count, 2) <= n) {
    if (n % count === 0 || n % (count + 2) === 0) {
      return false;
    }
    count += 6;
  }
  return true;
}

function fillPrimes(primes) {
  primes.push(2);
  primes.push(3);
  for (let n = 5; n < 2000000; n += 2) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }
}

function primeSummation(n) {
  let primes = [];
  fillPrimes(primes);
  let ans = 0;
  for (let i = 0; ; i++) {
    if (primes[i] < n) {
      ans += primes[i];
    } else {
      break;
    }
  }
  return ans;
}

primeSummation(2000000);
