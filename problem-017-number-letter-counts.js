const initials = [
  0,
  'one'.length,
  'two'.length,
  'three'.length,
  'four'.length,
  'five'.length,
  'six'.length,
  'seven'.length,
  'eight'.length,
  'nine'.length,
  'ten'.length,
  'eleven'.length,
  'twelve'.length,
  'thirteen'.length,
  'fourteen'.length,
  'fifteen'.length,
  'sixteen'.length,
  'seventeen'.length,
  'eighteen'.length,
  'nineteen'.length,
];

const tens = [
  0,
  0,
  'twenty'.length,
  'thirty'.length,
  'forty'.length,
  'fifty'.length,
  'sixty'.length,
  'seventy'.length,
  'eighty'.length,
  'ninety'.length,
];

function sumArray(arr) {
  return arr.reduce((cur, acc) => cur + acc, 0);
}

function letters(num) {
  const name = [];
  if (num >= 1000) {
    name.push(initials[Math.floor(num / 1000)]);
    name.push('thousand'.length);
    num %= 1000;
  }

  if (num >= 100) {
    name.push(initials[Math.floor(num / 100)]);
    name.push('hundred'.length);
    if (num % 100 != 0) {
      name.push('and'.length);
    }
    num %= 100;
  }
  if (num >= 20) {
    name.push(tens[Math.floor(num / 10)]);
    num %= 10;
  }
  if (num != 0) {
    name.push(initials[num]);
  }
  return sumArray(name);
}

function numberLetterCounts(limit) {
  let ans = 0;
  for (let i = 1; i <= limit; i++) {
    ans += letters(i);
  }
  console.log(ans);
  return ans;
}

numberLetterCounts(1000);
