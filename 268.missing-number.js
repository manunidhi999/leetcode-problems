/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let total = n * (n + 1) / 2;
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return total - sum;
};
// @lc code=end

