/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //i have an input of arrays and an output of an array of two numbers that equal the target
    // we would start off by creating a nest forloop so that we can go over each number and add them to see if they equal the target
    
    
    for (i = 0; i < nums.length; i++) {
        //we are using i + 1 to remove repetitive numbers
        for (j = i + 1; j < nums.length; j++) {
            //adding both i and j together and comparing it to the target. equality comparison.
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }   
        }
    }
};