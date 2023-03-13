/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let first = {};
    
    for (let char of s) {
        if (!first[char]) {
            first[char] = 0;
        }
        first[char] += 1;
    }
    
    for (let char of t) {
        if (first[char] === undefined) {
            return false;
        }
        first[char] -= 1;
    }
    
    for (let char in first) {
        if (first[char] !== 0) {
            return false
        }
    }
    
    return true;
    
    
};