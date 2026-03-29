class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // HashSet -> Time - O(n) and Space - O(n)
    findDuplicate(nums) {
        const set = new Set();

        for(const num of nums){
            if(set.has(num)){
                return num;
            }
            set.add(num);
        }

        return -1;
    }
}
