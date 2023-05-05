/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let visited = {};
    
    for (let char of s) {
        if (!(visited[char])) {
            visited[char] = 0;
        }
        visited[char] += 1;
    }
    
    for (let char of t) {
        if (visited[char] === undefined) {
            return false;
        }
        visited[char] -= 1;
    }
    
    for (let char in visited) {
        if (visited[char] !== 0) {
            return false
        }
    }
    
    return true;
    
};