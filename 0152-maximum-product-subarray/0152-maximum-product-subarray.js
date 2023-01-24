/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let currentMin = nums[0];
    let currentMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let temp = currentMax * current;
        
        currentMax = Math.max(currentMax * current, current, currentMin * current)
        currentMin = Math.min(temp, current, currentMin * current)
        max = Math.max(max, currentMax, currentMin)
    }
    
    return max;
};