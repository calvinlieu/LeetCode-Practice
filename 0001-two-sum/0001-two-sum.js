/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited = {};
    
    for (let num in nums) {
        let current = nums[num];
        let difference = target - current;
        
        if (difference in visited) {
            return [visited[difference], num]
        }
        
        visited[current] = num
    }
};
