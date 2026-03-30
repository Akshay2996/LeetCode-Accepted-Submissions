class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Hashmap (2 pass) -> Time - O(n) and Space - O(n)
    twoSum(nums, target) {
        const map = new Map();

        // First Pass: Populate the hash map with each number and its index
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], i);
        }

        // Second Pass: Check for each number's complement in the hash map
        for(let i = 0; i < nums.length; i++){
            const y = target - nums[i];

            if(map.has(y)){
                return [i, map.get(y)];
            }
        }

        return [];
    }
}
