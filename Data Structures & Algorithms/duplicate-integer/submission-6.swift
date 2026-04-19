class Solution {
    func hasDuplicate(_ nums: [Int]) -> Bool {
        var set = Set<Int>(nums)

        return set.count != nums.count
    }
}
