/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let prevMin = nums[0];
    let prevMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin)
        currMin = Math.min(nums[i] * prevMax, nums[i], nums[i] * prevMin)
        
        prevMax = currMax;
        prevMin = currMin;
        
        max = Math.max(currMax, max)
    }
    
    return max;
};