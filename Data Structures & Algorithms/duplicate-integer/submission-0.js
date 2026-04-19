class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setArr = new Set(nums)
        return setArr.size !== nums.length
    }
}
