class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const valueToIndex =new Map()
        for(let i = 0; i <nums.length; i++){
            let complementery = target - nums[i]
            if(valueToIndex.has( complementery)) return [i,valueToIndex.get(complementery)]
            valueToIndex.set(nums[i], i)
        }

    }
    
}
