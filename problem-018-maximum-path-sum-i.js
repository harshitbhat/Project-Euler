function maximumPathSumI(triangle) {
  const size = triangle.length;
  const dp = [];
  for (let i = 0; i < size; i++) {
    dp.push(new Array(size).fill(0));
  }
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < size; i++) {
    dp[i][0] = triangle[i][0] + dp[i - 1][0];
  }
  for (let i = 1; i < size; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }
  //   for (let row of dp) {
  //     console.log(row);
  //   }
  let ans = -1;
  for (let el of dp[size - 1]) {
    ans = Math.max(ans, el);
  }
  //   console.log(ans);
  return ans;
}

const testTriangle = [
  [3, 0, 0, 0],
  [7, 4, 0, 0],
  [2, 4, 6, 0],
  [8, 5, 9, 3],
];

maximumPathSumI(testTriangle);
