function fillPrimes(primes) {
  primes.push(2);
  primes.push(3);
  for (let n = 5; n < 10000; n += 2) {
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

let primes = [];

fillPrimes(primes);

function largestPrimeFactor(number) {
  let temp = number;
  let i = 0;
  while (temp != 1) {
    if (temp % primes[i] == 0) {
      while (temp % primes[i] == 0) {
        temp = Number(temp / primes[i]);
      }
    }
    i++;
  }
  return primes[i - 1];
}

console.log(largestPrimeFactor(600851475143));
