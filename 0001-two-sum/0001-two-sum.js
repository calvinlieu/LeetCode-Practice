/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited = {};
    
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let diff = target - current;
        
        if (diff in visited) {
            return [i, visited[diff]]
        }
        visited[current] = i;
    }
};