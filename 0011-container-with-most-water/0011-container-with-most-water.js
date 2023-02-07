/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let current = Math.min(height[left], height[right]) * (right - left);
        
        if (current > max) {
            max = current
        }
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--;
        }
    }
    
    return max;
};