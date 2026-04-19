class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // Formula: length of window - maxFreq char <= k
    characterReplacement(s, k) {
        const window = new Map();

        let l = 0;
        let r = 0;
        let res = 0;
        
        while(r < s.length){
            // Set the hashmap char: freq
            window.set(s[r], (window.get(s[r]) || 0) + 1);
            
            // Condition violated
            while((r - l + 1) - Math.max(...window.values()) > k){
                window.set(s[l], (window.get(s[l])) - 1);
                l++;
            }
            
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
