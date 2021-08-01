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
  for (let i = 0; i < nums.length; i++) {
    const arr = []
    for (let j = i; j < nums.length; j++) {
      arr.push(nums[j])
      let sum = 0
      for (let k = 0; k < arr.length; k++) {
        sum = sum + arr[k]
      }
      // console.log(sum, arr)
      if (sum >= target) {
        if (minLen === 0 || arr.length < minLen) {
          minLen = arr.length
        }
      }
    }
    console.log(i, minLen)
  }
  return minLen
}

console.log(minSubArrayLen(120331635, data))
