class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    // HashMap -> Time - O(n) and Space - O(n)
    containsNearbyDuplicate(nums, k) {
        const map = new Map();

        for(let i = 0; i< nums.length; i++){
            if(map.has(nums[i]) && i - map.get(nums[i]) <= k){
                return true;
            }
            map.set(nums[i], i);
        }

        return false;
    }
}
