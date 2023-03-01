/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let max = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        while(charSet.has(char)) {
            charSet.delete(s[start])
            start++;
        }
        
        charSet.add(char);
        
        max = Math.max(max, i - start + 1)
    }
    
    return max;
};