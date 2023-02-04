/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // two pointers + maxArea to keep track of max.
    let max = 0;
    let left = 0;
    let right = height.length - 1; 
    
    
    //basic two pointers while look
    while (left < right) {
        
        // find the area by grabbing the minimum of both pointers times the width.
        let area = Math.min(height[left], height[right]) * (right - left) 
        
        //if area is bigger then max, replace max with that area.
        if (area > max) {
            max = area;
        }
        
        //move our pointers if one is smaller than the other.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};