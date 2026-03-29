class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Hash Map - Time Complexity O(n+m)
    isAnagram(s, t) {
            if(s.length !== t.length) return false;

            const sMap = new Map();
            const tMap = new Map();

            // Add the value: frequency in hashmaps
            for(let i = 0; i < s.length; i++){
                let sFreq = (sMap.get(s[i]) || 0) + 1;
                let tFreq = (tMap.get(t[i]) || 0) + 1;

                sMap.set(s[i], sFreq);
                tMap.set(t[i], tFreq);
            }

            for(let key of sMap.keys()){
                if(sMap.get(key) !== tMap.get(key)){
                    return false;
                }
            }

            return true;
    }
}
