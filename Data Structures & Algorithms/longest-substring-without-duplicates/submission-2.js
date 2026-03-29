class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // Sliding window -> Time - O(n); Space - O(m)
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let res = 0;
        let l = 0, r = 0;

        while(r<s.length){
            while(charSet.has(s[r])){
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            res = Math.max(res, r-l+1);
            r++;
        }

        return res;
    }
}
