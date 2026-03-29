class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // HashMap - O(m*n*26) ≈ O(m*n)
        const result = {};

        for(let str of strs){
            // count = [0,0,0,...26 times]
            const count = new Array(26).fill(0);
            // each character of str - 'hat' => 'h' 'a' 't' => [1,0,0...8thplace -> 1, 0,...so on]
            for (let c of str){
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            // Make count as string => 100000010...so on till 26th place
            const key = count.join(",")
            if(!result[key]){
                result[key] = []
            }
            result[key].push(str);
        }

        return Object.values(result)
    }
}
