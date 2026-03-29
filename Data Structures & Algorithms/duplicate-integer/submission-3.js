class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // Sets -> O(n)
    hasDuplicate(nums) {
        const set = new Set();

        for(let num of nums){
            if(set.has(num)){
                return true;
            }

            set.add(num);
        }

        return false;
    }
}
