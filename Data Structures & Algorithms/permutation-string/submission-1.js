class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // Sliding window with hashmaps -> Time - O(26*n) ~ O(n)
    // Fixed window of s1 length for searching and comparing in s2 string
    checkInclusion(s1, s2) {
        // Edge case
        if(s1.length > s2.length) return false;

        const count1 = new Map();
        const count2 = new Map();

        // Save the character: count in the hashmap of s1 string
        for(let i = 0; i < s1.length; i++){
            count1.set(s1[i], (count1.get(s1[i]) || 0) + 1);
        }

        let l = 0;
        let r = 0;
        // Window of fixed size of s1 string
        const k = s1.length;

        while(r < s2.length){
            // Add the character: count in string s2
            count2.set(s2[r], (count2.get(s2[r]) || 0) + 1);

            while((r - l + 1) > k){
                count2.set(s2[l], count2.get(s2[l]) - 1);

                if(count2.get(s2[l]) === 0){
                    count2.delete(s2[l]);
                }

                l++;
            }

            if((r - l + 1) === k){
                let isMatch = true;
                // Compare the hashmaps for the frequency of characters
                for(let [key, value] of count1){
                    if(count2.get(key) !== value){
                        isMatch = false;
                        break;
                    }
                }

                if(isMatch) return true;
            }

            r++;
        }

        return false;
    }
}
