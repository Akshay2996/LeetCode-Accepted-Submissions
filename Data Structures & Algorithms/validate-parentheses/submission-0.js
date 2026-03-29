class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // Bruteforce -> Time - O(n^2) and Space - O(n)
    isValid(s) {
        while(s.includes("()") || s.includes("[]") || s.includes("{}")){
            s = s.replace("()", "");
            s = s.replace("[]", "");
            s = s.replace("{}", "");
        }

        return s === ""
    }
}
