class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // Hashmap (1 pass) -> Time - O(n) and Space - O(n)
    twoSum(nums, target) {
        const map = new Map();

        for(let i=0; i< nums.length; i++){
            const y = target - nums[i];

            if(map.has(y)){
                return [i, map.get(y)];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}
