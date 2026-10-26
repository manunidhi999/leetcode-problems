/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }
    let map1 = {};
    let map2 = {};

    for (let i = 0; i < pattern.length; i++) {
        let ch = pattern[i];
        let word = words[i];

        if (map1[ch] && map1[ch] !== word) {
            return false;
        }
        if (map2[word] && map2[word] !== ch){
            return false;
        }
        map1[ch] = word;
        map2[word] = ch;

    }
    return true;
};
// @lc code=end

