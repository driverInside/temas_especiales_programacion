/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

const nums = [3,2,4];
const target = 6;

console.log(twoSum(nums, target)); // [1, 2]
