class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [n, f] of count) buckets[f].push(n);

        const res = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            res.push(...buckets[i]);
        }

        return res.slice(0, k);
    }
}
