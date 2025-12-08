/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/**
 * Add two binary strings and return their sum as a binary string.
 * Works for very long strings because it never converts the whole string to a number.
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    const res = [];

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += a[i--] === '1' ? 1 : 0;
        if (j >= 0) sum += b[j--] === '1' ? 1 : 0;

        res.push((sum % 2).toString());
        carry = (sum >> 1);
    }

    return res.reverse().join('');
};
