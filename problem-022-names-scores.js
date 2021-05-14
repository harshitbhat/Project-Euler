const scores = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function namesScores(arr) {
  let ans = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    let wordScore = 0;
    for (let ch of word) {
      wordScore += scores[ch];
    }
    ans += wordScore * (i + 1);
  }
  console.log(ans);
  return ans;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test2);
