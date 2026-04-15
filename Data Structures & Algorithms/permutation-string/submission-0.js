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

        const countS1 = new Map();
        const countS2 = new Map();

        for(let i = 0; i < s1.length; i++){
            // Save the character: count in the hashmap of s1 string
            countS1.set(s1[i], (countS1.get(s1[i]) || 0) + 1);
        }

        const k = s1.length;
        let l = 0;
        let r = 0;

        while(r < s2.length){
            // Add the count in string s2
            countS2.set(s2[r], (countS2.get(s2[r]) || 0) + 1);

            // Maintain window size
            // Window length is more than k then decrease the count of the left char
            // and increase the left pointer 
            while((r - l + 1) > k){
                countS2.set(s2[l], countS2.get(s2[l]) - 1);
                l++;
            }

            if((r - l + 1) === k){
                // Compare both the maps
                if(this.matches(countS1, countS2)) return true;
            }

            r++;
        }

        return false;
    }

    matches(c1, c2){
        for(let [key, value] of c1){
            if(c2.get(key) !== value) return false;
        }

        return true;
    }
}
