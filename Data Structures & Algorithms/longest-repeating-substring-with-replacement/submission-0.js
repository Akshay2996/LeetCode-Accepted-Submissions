class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // Sliding Window -> Time - O(26*n) and Space - O(m)
    // Condition -> length of the window - max frequency char <= k
    // res = Math.max(length of the window, res);
    characterReplacement(s, k) {
        // Count the number of elements (Frequency) in a single window
        let count = new Map();

        let res = 0;

        let l = 0;
        let r = 0;

        while(r < s.length){
            // Count the character and set it in hashmap
            // Value: Count
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            // Check if condition is violated or not
            // If it is then decrease the character count and increase left pointer
            // Condition Violation = (r-l+1) - max frequency character in count map > k
            while(((r - l + 1) - Math.max(...count.values())) > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            // Window length = r - l + 1;
            res = Math.max(r - l + 1, res);
            r++;
        }

        return res;
    }
}
