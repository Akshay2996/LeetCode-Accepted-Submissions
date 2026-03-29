class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       // HashSets - O(n)
       // <-[1,2,3,4]-> <-[100]-> <-[200]->
        let longest = 0;
       // convert to set for faster lookups
       const numSet = new Set(nums);

       for(let num of nums){
        // Check if num - 1 is not present then only
        // start since it's the beginning of a sequence
        if(!numSet.has(num-1)){
            let streak = 1;
            while(numSet.has(num+streak)){
                streak++;
            }
            longest = Math.max(longest, streak)
        }
       }
        return longest;
    }
}
