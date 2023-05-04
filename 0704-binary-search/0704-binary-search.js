/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    //have 2 pointers at each end of the array;
    let left = 0;
    let right = nums.length - 1;
    
    //normal binary search while loop;
    while (left <= right) {
        
        //grab our middle pointer;
        let middle = Math.floor((left + right) / 2);
        
        //if the middle number is our target, return that index;
        if (nums[middle] === target) {
            return middle;
            
            //else if the middle number is less than the target, we want to search the right side.
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return -1;
};