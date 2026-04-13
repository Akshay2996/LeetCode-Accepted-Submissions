class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    // HashMap -> Time - O(n) and Space - O(n)
    containsNearbyDuplicate(nums, k) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            // j - i <= k -> Here j is i and map.get(nums[i]) is the earlier i index
            if(map.has(nums[i]) && i - map.get(nums[i]) <= k){
                return true;
            }

            // Set it in pair -> value: index
            map.set(nums[i], i);
        }

        return false;
    }
}
