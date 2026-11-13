/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        ans[i] = ans[Math.floor(i / 2)] + (i % 2);
    }
    return ans;
};
// @lc code=end

