/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let current = 0;
    
    for (let i in nums) {
        if (current < 0) {
            current = 0;
        }
        current += nums[i]
        max = Math.max(max, current)
    }
    
    return max;
};