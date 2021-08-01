/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/*
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/
const data = require('./209-sample.json')
console.log(data.length)
const minSubArrayLen = function (target, nums) {
  let minLen = 0
  let start = 0
  let sum = 0
  for (let end = 0; end < nums.length; end++) {
    sum = sum + nums[end]
    while (sum >= target) {
      if (minLen === 0 || minLen > (end - start + 1)) {
        minLen = end - start + 1
      }
      sum = sum - nums[start]
      start = start + 1
    }
  }
  return minLen
}
console.log(minSubArrayLen(120331635, data))
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
