/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = nums[0];
    let currentSum = max;
    
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += nums[i];
        
        max = Math.max(currentSum, max);
    }
    
    return max;
};