function fillPrimes(primes) {
  primes.push(2);
  primes.push(3);
  for (let n = 5; primes.length < 10002; n += 2) {
    let isPrime = true;
    for (let i = 2; i <= Number(Math.sqrt(n)); i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      primes.push(n);
    }
  }
}

function nthPrime(n) {
  let primes = [];
  fillPrimes(primes);
  return primes[n - 1];
}
