class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // Sliding Window -> Time - O(n)
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let res = 0;
        let char = new Set();

        while(r < s.length){
            while(char.has(s[r])){
                char.delete(s[l]);
                l++;
            }

            char.add(s[r]);
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
