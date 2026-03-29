class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // Sliding window -> Time - O(n); Space - O(m)
    lengthOfLongestSubstring(s) {
        let res = 0;
        let charSet = new Set();
        let l=0, r=0;

        while(r < s.length){
            while(charSet.has(s[r])){
                // Remove the element from left side in the Set
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            // Consider inclusive indices -> r-l+1
            res = Math.max(res, r-l+1);
            r++;
        }

        return res;
    }
}
