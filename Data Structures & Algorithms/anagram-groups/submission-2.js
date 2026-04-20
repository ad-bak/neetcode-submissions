class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
const map = new Map()

        for (const word of strs) {
            const key = [...word].sort().join('')
            map.set(key, [...(map.get(key) || []), word])
        }

        return [...map.values()]
    }
}
