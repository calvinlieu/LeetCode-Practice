/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let max = currentSum;
    
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        
        currentSum += nums[i];
        max = Math.max(currentSum, max)
    }
    
    return max;
};