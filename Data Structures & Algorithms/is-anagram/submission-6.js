class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Hash Map -> Time Complexity O(n+m)
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const mapS = {};
        const mapT = {};

        // Count the character frequency
        for(let i = 0; i < s.length; i++){
            mapS[s[i]] = (mapS[s[i]] || 0) + 1;
            mapT[t[i]] = (mapT[t[i]] || 0) + 1;
        }

        // Compare the HashMaps for both the strings
        for(let count in mapS){
            if(mapS[count] !== mapT[count]){
                return false;
            }
        }

        return true;
    }
}
