class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // Sliding Window -> Time - O(26*n) ~ O(n) and Space - O(m)
    // Condition => length of the window - maxFreq of char <= k
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let r = 0;
        const window = new Map();
        let maxFreq = 0;

        while(r < s.length){
            window.set(s[r], (window.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, window.get(s[r]));

            // Condition violated
            while((r - l + 1) - maxFreq > k){
                window.set(s[l], window.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
