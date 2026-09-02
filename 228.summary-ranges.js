/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    let start = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
         
          if(start === i -1) {
            result.push(String(nums[start]));
          }  else {
            result.push(nums[start] + "->" + nums[i - 1]);
          }
          start = i;
        }
    }

    return result;
};
// @lc code=end


