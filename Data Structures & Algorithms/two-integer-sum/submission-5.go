func twoSum(nums []int, target int) []int {
    seen := make(map[int]int)

    for i, val := range nums {
        need := target - val

        if j,ok := seen[need]; ok {
            return []int{j,i}
        }

        seen[val] = i
    }

    return []int{}
}
