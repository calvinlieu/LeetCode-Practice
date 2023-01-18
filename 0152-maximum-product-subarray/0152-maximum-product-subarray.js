/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currMin = nums[0];
    let currMax = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        
        let temp = currMax * nums[i]
        currMax = Math.max(currMax * nums[i], currMin * nums[i], nums[i]);
        currMin = Math.min(temp, currMin * nums[i], nums[i]);
        max = Math.max(max, currMax, currMin)
    }
    
    return max;
};