/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited = {};

    for (let i in nums) {
        let currentNum = nums[i];
        let difference = target - currentNum;

        if (difference in visited) {
            return [visited[difference], i]
        } else {
            visited[currentNum] = i
        }
    }
};