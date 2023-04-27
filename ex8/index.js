/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    
    if (dict[diff + '']) {
      return [i, dict[diff + '']];
    }
    
    dict[nums[i]] = i;
  }
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target)); // [1, 2]

// first solution
// const twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
// };
