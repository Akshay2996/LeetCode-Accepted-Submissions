class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Sorting -> Time - O(nlogn + mlogm)
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const sortS = s.split("").sort().join();
        const sortT = t.split("").sort().join();

        return sortS == sortT;
    }
}
