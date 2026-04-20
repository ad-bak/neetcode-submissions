class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapNums = new Map()

        for (let i = 0; i < nums.length; i ++){
            const need = target - nums[i]

            if(mapNums.has(need)) {
                return [mapNums.get(need), i]
            } else {
                mapNums.set(nums[i], i)
            }
        }
    }
}
