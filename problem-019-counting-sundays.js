const daysInMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const daysInFeb = (year) => {
  if (year % 4 !== 0) {
    return 28;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return 28;
  }
  return 29;
};

// Sundays from 1 Jan 1900 to 31st December of the given year
// Since 1st Jan 1990 is Monday, every 7th multiple will be sunday.
const calcSundays = (year) => {
  let days = 0;
  let sundays = 0;
  for (let yr = 1900; yr <= year; yr++) {
    for (let j = 0; j < 12; j++) {
      if ((days + 1) % 7 == 0) {
        sundays++;
      }
      days += j === 1 ? daysInFeb(yr) : daysInMonths[j];
    }
  }
  return sundays;
};

function countingSundays(firstYear, lastYear) {
  const ans = calcSundays(lastYear) - calcSundays(firstYear - 1);
  return ans;
}

countingSundays(1943, 1946);
