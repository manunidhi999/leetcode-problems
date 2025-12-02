/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (map[ch]) {
      stack.push(map[ch]);
    } else {
      if (stack.pop() !== ch) {
        return false;
      }
    }
  }
  return stack.length === 0;
};


