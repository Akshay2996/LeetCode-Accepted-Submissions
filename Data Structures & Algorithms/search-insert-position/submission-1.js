class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // Binary search - O(logn)
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums.length;

        while(l <= r){
            const mid = l + Math.floor((r-l) / 2);

            if(nums[mid] > target){
                res = mid;
                r = mid - 1;
            } else if (nums[mid] < target){
                l = mid + 1;
            } else {
                return mid;
            }
        }

        return res;
    }
}
