class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Sorting - O(nlogn)
        // Make a hashmap of frequency
        const count = {};
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        // Sort by frequency
        // [[num, frequency]]
        const arr = Object.entries(count).sort((a,b) => b[1] - a[1]);

        // Take the top k elements - 
        return arr.slice(0, k).map(pair => pair[0]);

    }
}
