class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // Floyd's Fast and Slow Pointer
    // Time - O(n) and Space - O(1)
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        // To find first intersection
        while(true){
            // 2*slow = fast
            slow = nums[slow];
            /**
             * fast moves twice and can be written as
             * fast = nums[fast];
             * fast = nums[fast];
             */ 
            fast = nums[nums[fast]];

            if(slow === fast) break;
        }

         // Find second intersection and that will be the duplicate value
         let slow2 = 0;
         while(true){
            slow = nums[slow];
            slow2 = nums[slow2];

            if(slow === slow2){
                return slow2;
            }
         }
    }
}
