class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // HashSets -> Time and Space - O(n)
       // <-[1,2,3,4]-> <-[100]-> <-[200]->
    longestConsecutive(nums) {
        const set = new Set(nums);

        let res = 0;

        for(let num of nums){
        // Check if num - 1 is not present then only
        // start since it's the beginning of a sequence
            if(!set.has(num-1)){
                let streak = 1;
                while(set.has(num+streak)){
                    streak++;
                }

                res = Math.max(res, streak);
            }
        }

        return res;
    }
}
