/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    while (x !== 0) {
        // Extract the last digit (handles negative numbers correctly in JS via truncation)
        let pop = x % 10;
        x = Math.trunc(x / 10);

        // Check overflow before updating `rev`
        if (rev > Math.trunc(INT_MAX / 10) || (rev === Math.trunc(INT_MAX / 10) && pop > 7)) return 0;
        if (rev < Math.trunc(INT_MIN / 10) || (rev === Math.trunc(INT_MIN / 10) && pop < -8)) return 0;

        rev = rev * 10 + pop;
    }

    return rev;
};