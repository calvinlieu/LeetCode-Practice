/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     let currMin = nums[0];
//     let currMax = nums[0];
//     let max = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
        
//         let temp = currMax * nums[i]
//         currMax = Math.max(currMax * nums[i], currMin * nums[i], nums[i]);
//         currMin = Math.min(temp, currMin * nums[i], nums[i]);
//         max = Math.max(max, currMax, currMin)
//     }
// };

var maxProduct = function(nums) {
    //initialize our variables with the first number in the array
    let max = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    
    //traverse through the nums array
    for (let i = 1; i < nums.length; i++) {
        //make a temp variable that holds the currMax before we run the Math.min on currMin.
        let temp = currMax * nums[i];
        
        currMax = Math.max(currMax * nums[i], nums[i], currMin * nums[i])
        currMin = Math.min(temp, nums[i], currMin * nums[i])
        
        //find the max of max, currMax and currMin
        max = Math.max(max, currMax, currMin)

    }
    
    return max;
};