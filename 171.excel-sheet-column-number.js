/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;

    for (let char of columnTitle) {
        let value = char.charCodeAt(0) - 64;
        result = result * 26 + value;
    }

    return result; 
};
// @lc code=end

