/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let difference = target - current;
        
        if (difference in visited) {
            return [visited[difference], i]
        }
        
        visited[current] = i
    }
};