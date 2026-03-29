class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Two pointers - O(n)
        let left = 0;
        let right = s.length - 1;

        while(left<right){
            while(left < right && !this.alphaNum(s[left])){
                left++;
            }
            while(right > left && !this.alphaNum(s[right])){
                right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }

    alphaNum(c){
        return /[a-z0-9]/i.test(c);
    }
}
