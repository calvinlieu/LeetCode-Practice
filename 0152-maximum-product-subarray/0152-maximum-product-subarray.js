/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let currMin = nums[0];
    let currMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let temp = currMax * current;
        currMax = Math.max(currMax * current, current, currMin * current)
        currMin = Math.min(temp, current, currMin * current);
        max = Math.max(max, currMax, currMin);
    }
    
    return max;
};