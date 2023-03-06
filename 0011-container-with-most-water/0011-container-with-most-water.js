/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let currentArea = (right - left) * Math.min(height[right], height[left])
        
        if (currentArea > max) {
            max = currentArea
        }
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--;
        }
        
        max = Math.max(max, currentArea)
    }
    
    return max;
};