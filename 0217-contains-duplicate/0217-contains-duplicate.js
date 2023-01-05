/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const set = new Set();
    
    for(let i in nums) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i])
        }
    }
    return false;
};