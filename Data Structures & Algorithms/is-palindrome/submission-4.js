class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // 2 Pointers -> Time - O(n) and Space - O(1)
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while(l<r){
            while(l < r && !this.alphaNum(s[l])){
                l++;
            }
            while(r > l && !this.alphaNum(s[r])){
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    alphaNum(c){
        return /[a-z0-9]/i.test(c);
    }
}
