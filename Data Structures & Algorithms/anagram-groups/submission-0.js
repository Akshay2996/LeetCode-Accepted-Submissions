class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Sorting - O(m*nlogn)
        const result = {};

        for(let str of strs){
            // Sort the string
            const sortedS = str.split("").sort().join("");
            // Check if the object/hashmap have the key
            if(!result[sortedS]){
                result[sortedS] = [];
            }
            result[sortedS].push(str);
        }

        return Object.values(result);
    }
}

// ["cat", "hat", "act", "rat"] - Input
// [["hat"], ["rat"], ["act", "cat"]] - Output