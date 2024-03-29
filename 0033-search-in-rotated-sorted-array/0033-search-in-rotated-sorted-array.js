/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        
        if (target === nums[middle]) {
            return middle;
        }
        
        //left sorted portion
        
        if (nums[left] <= nums[middle]) {
            if (target > nums[middle] || target < nums[left]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        } else {
            if (target < nums[middle] || target > nums[right]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }
    
    return -1
};