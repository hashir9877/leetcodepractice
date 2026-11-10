/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0, end = 0;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        // loop overshoots by one on each side
        return [l + 1, r - 1];
    };

    for (let i = 0; i < s.length; i++) {
        // odd-length palindrome centered at i
        const [l1, r1] = expand(i, i);
        // even-length palindrome centered between i and i+1
        const [l2, r2] = expand(i, i + 1);

        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.slice(start, end + 1);
};