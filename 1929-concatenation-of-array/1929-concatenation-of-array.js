/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArr = [];
    
    for (let i in nums) {
        newArr.push(nums[i])
    }
    
    return nums.concat(newArr)
};