class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // Sliding Window -> Time - O(n) and Space - O(m)
    // Condition -> length of the window - max frequency char <= k
    // res = Math.max(length of the window, res);
    // Keep the maxFrequency of the count hashmap
    characterReplacement(s, k) {
        const count = new Map();

        let res = 0;
        let l = 0;
        let r = 0;
        // Create a variable to count max Frequency of character
        let maxFreq = 0;

        while(r < s.length){
            // Set the char in hashmap and count it and keep it in maxFreq variable
            // Value: Count
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(s[r]));

            // Check if condition is violated or not
            // If it is then decrease the character count and increase left pointer
            // Condition Violation = (r-l+1) - max frequency character in count map > k            
            while((r - l + 1) - maxFreq > k){
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
