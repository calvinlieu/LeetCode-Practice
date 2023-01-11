/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let visited = {};
    
    for (let i in nums) {
        if (nums[i] in visited) {
            return true;
        } else {
            visited[nums[i]] = i
        }
    }
    
    return false;
};