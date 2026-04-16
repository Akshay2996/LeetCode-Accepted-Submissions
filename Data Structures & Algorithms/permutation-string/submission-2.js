class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Edge Case
        if(s1.length > s2.length) return false;

        const count1 = new Map();
        const count2 = new Map();
        
        for(let i = 0; i < s1.length; i++){
            count1.set(s1[i], (count1.get(s1[i]) || 0) + 1);
        }

        let l = 0;
        let r = 0;
        const k = s1.length;

        while(r < s2.length){
            count2.set(s2[r], (count2.get(s2[r]) || 0) + 1);

            while((r - l + 1) > k){
                count2.set(s2[l], count2.get(s2[l]) - 1);

                if(count2.get(s2[l]) === 0){
                    count2.delete(s2[l]);
                }
                l++;
            }

            if((r - l + 1) === k){
                if(this.matches(count1, count2)) return true;
            }

            r++;
        }

        return false;
    }

    matches(c1, c2){
        if(c1.size !== c2.size) return false;

        for(let [key, value] of c1){
            if(c2.get(key) !== value) return false;
        }

        return true;
    }
}
