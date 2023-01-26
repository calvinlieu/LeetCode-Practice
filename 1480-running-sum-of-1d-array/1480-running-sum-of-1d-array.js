/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    let sum = 0;
    
    for (let i in nums) {
        sum += nums[i];
        arr.push(sum)
    }
    
    return arr;
};