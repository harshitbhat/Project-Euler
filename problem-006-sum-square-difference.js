function sumSquareDifference(n) {
  const sumOfSquares = Number((n * (n + 1) * (2 * n + 1)) / 6);
  const squareofSum = Number((n * (n + 1)) / 2) ** 2;
  return squareofSum - sumOfSquares;
}

sumSquareDifference(100);
