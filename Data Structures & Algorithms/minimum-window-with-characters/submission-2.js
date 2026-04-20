class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    // Sliding Window -> Time - O(n + m) and Space O(m)
    // Where n is the length of the string s and
    // m is the total number of unique characters in the strings t and s.
    minWindow(s, t) {
        // Edge Case
        if(t === "") return "";

        let countT = {};
        let window = {};

        for(let c of t){
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0, r = 0;

        while(r < s.length){
            let c = s[r];
            window[c] = (window[c] || 0) + 1;
            
            if(countT[c] && countT[c] === window[c]){
                have++;
            }
            
            while(have === need){
                // Update the result
                if(r - l + 1 < resLen){
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;

                if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                    have--;
                }
                
                l++;
            }

            r++;
        }

        [l, r] = res;

        return resLen === Infinity ? "" : s.slice(l, r + 1);
    }
}
