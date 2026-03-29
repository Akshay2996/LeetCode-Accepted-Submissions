class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Sort of Bucketsort - O(n)
        // Make a frequency array where index represent the frequency and values an array of numbers
        const count = {};

        // Frequency array will be of same length as nums array
        const frequency = Array.from({length: nums.length + 1}, () => []);

        for(let num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        // freq.(Index) [ 0   1     2
        //    Values      0 [1,2]  [3]  ]
        // n -> [num, frequency]
        for(const n in count){
            frequency[count[n]].push(parseInt(n));
        }

        const res = [];
        // Traverse the frequency array in reverse
        // frequency[i] -> value at second index if i = 2 i.e [3]
        // n will be 3
        for(let i = frequency.length - 1; i > 0; i--){
            for(const n of frequency[i]){
                res.push(n)
                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
