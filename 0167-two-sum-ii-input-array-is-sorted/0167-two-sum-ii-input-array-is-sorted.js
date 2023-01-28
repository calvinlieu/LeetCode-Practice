/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        curSum = numbers[left] + numbers[right];
        if (curSum > target) {
            right -= 1;
        } else if (curSum < target) {
             left++;
         } else {
             return [left + 1, right + 1]
         }
    }
};