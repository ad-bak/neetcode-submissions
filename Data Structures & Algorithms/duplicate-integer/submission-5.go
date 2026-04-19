func hasDuplicate(nums []int) bool {
    set := make(map[int]bool)

    for _, n := range nums {
        _, exists := set[n]
        if exists {
            return true
        }
        set[n] = true
    }
    return false
}
