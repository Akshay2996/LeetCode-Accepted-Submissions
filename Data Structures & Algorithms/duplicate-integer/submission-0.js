class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const track = new Set([]);
        for(const num of nums){
            if(track.has(num)){
                return true;
            }
            track.add(num);
        }
        return false;
    }
    
}
