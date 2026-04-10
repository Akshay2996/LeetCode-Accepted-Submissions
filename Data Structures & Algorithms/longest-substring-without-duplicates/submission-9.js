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
        const charSet = new Set();

        while(r < s.length){
            while(charSet.has(s[r])){
                charSet.delete(s[l]);
                l++;
            }

            charSet.add(s[r]);
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
