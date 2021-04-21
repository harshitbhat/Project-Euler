function largeSum(arr) {
  const n = arr[0].length;
  let carry = 0;
  const ans = [];
  for (let i = n - 1; i >= 0; i--) {
    let dig = 0;
    for (let num = 0; num < arr.length; num++) {
      dig += parseInt(arr[num][i]);
    }
    dig += carry;
    carry = parseInt(dig / 10);
    dig = dig % 10;
    ans.push(dig);
  }
  while (carry != 0) {
    ans.push(carry % 10);
    carry = parseInt(carry / 10);
  }
  const tenDigits = ans.reverse().slice(0, 10);
  let k = 0;
  let i = 9;
  let sol = 0;
  while (i >= 0) {
    sol += tenDigits[i] * 10 ** k;
    k++;
    i--;
  }
  return sol;
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538',
];

const myNums = ['99', '99'];

largeSum(testNums);
// largeSum(myNums);
