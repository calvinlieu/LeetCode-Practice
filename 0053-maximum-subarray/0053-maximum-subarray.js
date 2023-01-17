/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currentSum = maxSub;
    
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0
        }
        
        currentSum += nums[i];
        maxSub = Math.max(currentSum, maxSub);
    }
    
    return maxSub
};