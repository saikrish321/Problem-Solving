/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = []
    for (let i = 0; i < nums.length; i++) {
        if(nums.includes((target - nums[i]))){
            const itemIndex = nums.indexOf((target - nums[i]));
            if(i !== itemIndex) {
                output = [i,itemIndex]
            }
        }
    }
    return output;
};