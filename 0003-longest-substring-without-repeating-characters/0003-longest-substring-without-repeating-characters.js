/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charMap = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];
        
        // If the character is already in the map and its index is within the current window
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1;
        }
        
        // Update the last seen position of the current character
        charMap.set(currentChar, right);
        
        // Calculate the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};