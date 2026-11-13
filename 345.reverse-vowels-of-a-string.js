/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split("");
    let vowels = "aeiouAEIOU";

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }

        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }

        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left ++;
        right --;
    }
    return arr.join("");
};
// @lc code=end


