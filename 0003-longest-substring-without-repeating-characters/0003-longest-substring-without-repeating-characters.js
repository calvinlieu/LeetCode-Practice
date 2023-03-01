/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let visited = {};
    
    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        
        if (visited[currentChar] !== undefined && visited[currentChar] >= start) {
            start = visited[currentChar] + 1;
        }
        
        visited[currentChar] = i;
        
        max = Math.max(max, i - start + 1)
    }
    
    return max;
};