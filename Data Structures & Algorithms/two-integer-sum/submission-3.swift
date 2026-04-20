class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var seen = [Int: Int]()

        for(i, val) in nums.enumerated() {
            let need = target - val
            if let j = seen[need] {
                return [j,i]
            }

            seen[val] = i
        }
        return []
    }
}
