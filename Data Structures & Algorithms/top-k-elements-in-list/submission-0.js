class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();

        for (const n of nums) {
            count.set(n, (count.get(n) ?? 0) + 1);
        }

        const buckets = Array(nums.length + 1);

        for (const [num, freq] of count) {
            if (!buckets[freq]) buckets[freq] = [];
            buckets[freq].push(num);
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i]) {
                for (const num of buckets[i]) {
                    res.push(num);
                    if (res.length === k) return res;
                }
            }
        }

        return res;
    }
}
