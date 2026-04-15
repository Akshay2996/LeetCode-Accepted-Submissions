class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // Sliding Window -> Time - O(26*n) ~ O(n) and Space - O(m)
    // Condition -> length of the window - max frequency char <= k
    // res = Math.max(length of the window, res);
    characterReplacement(s, k) {
        let res = 0;
        // Count the number of elements (Frequency) in a single window
        const window = new Map();
        let l = 0;
        let r = 0;

        while(r < s.length){
            // Count the character and set it in hashmap
            // Value: Count
            window.set(s[r], (window.get(s[r]) || 0) + 1);
            
            // Check if condition is violated or not
            // If it is then decrease the character count and increase left pointer
            // Condition Violation = (r-l+1) - max frequency character in count map > k
            while((r - l + 1) - Math.max(...window.values()) > k){
                window.set(s[l], (window.get(s[l]) - 1));
                l++;
            }

            // Window length = r - l + 1;
            res = Math.max(res, r - l + 1);
            r++;
        }
        

        return res;
    }
}
