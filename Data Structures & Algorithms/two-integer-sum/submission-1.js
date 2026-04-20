class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapNums = new Map()

        for (let i = 0; i < nums.length; i ++){
            const current = nums[i]
            const needed = target - current

            if(mapNums.has(needed)){
                return [mapNums.get(needed),i]
            }

            mapNums.set(current, i)
        }
    }
}
