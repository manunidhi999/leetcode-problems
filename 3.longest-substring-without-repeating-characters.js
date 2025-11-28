/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  let left = 0;
  const lastIndex = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastIndex.has(ch) * lastIndex.get(ch) >= left) {
      left = lastIndex.get(ch) + 1;
    }
    lastIndex.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}


