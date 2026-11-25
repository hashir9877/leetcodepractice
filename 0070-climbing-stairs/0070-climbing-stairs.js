/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let prevTwo = 1; // ways to reach step 1
  let prevOne = 2; // ways to reach step 2

  for (let step = 3; step <= n; step++) {
    const current = prevOne + prevTwo;
    prevTwo = prevOne;
    prevOne = current;
  }

  return prevOne;
};