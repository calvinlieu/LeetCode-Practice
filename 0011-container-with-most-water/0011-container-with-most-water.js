/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    for (let i = 0; i < height.length; i++) {
        let currentArea = Math.min(height[right], height[left]) * (right - left);
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--;
        }
        
        max = Math.max(max, currentArea);
    }
    
    return max;
};