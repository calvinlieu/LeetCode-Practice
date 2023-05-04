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
    
    for (let char1 of t) {
        if (visited[char1] === undefined) {
            return false;
        }
        visited[char1] -= 1;
    }
    
    for (let char2 in visited) {
        if (visited[char2] !== 0) {
            return false;
        }
    }
    
    return true;
};