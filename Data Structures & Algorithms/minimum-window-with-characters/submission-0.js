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
        // Edge case
        if(t === "") return "";

        let countT = {};
        let window = {};

        // Hashmap for char: count(freq. of char)
        for(let c of t){
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        // Length of the keys of countT
        let need = Object.keys(countT).length;
        let l = 0;
        let r = 0;
        // Indices array to keep the result
        let res = [-1, -1];
        // To find minimum we use "Infinity"
        let resLen = Infinity;

        while(r < s.length){
            let c = s[r];
            // Add char to the window Object with char: count
            window[c] = (window[c] || 0) + 1;

            // When condition met; increase the "have" value
            if(countT[c] && window[c] === countT[c]){
                have++;
            }

            while(have === need){
                // Window length is less than resLen then
                // update the result
                if(r - l + 1 < resLen){
                    resLen = r - l + 1;
                    res = [l, r];
                }

                // Pop from the left of the window
                window[s[l]]--;
                // If condition met decrease the "have" value
                if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                    have--;
                }

                l++;
            }

            r++;
        }

        [l, r] = res;

        return resLen === Infinity ? "" : s.slice(l, r+1);
    }
}
