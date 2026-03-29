class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Hashmap -> Time - O(n) and Space - O(n)
    // Store value: index in hashmap
    twoSum(numbers, target) {
        const map = new Map();
        for(let i=0; i<numbers.length; i++){
            const y = target - numbers[i];
            if(map.has(y)){
                return [map.get(y), i + 1];
            }

            map.set(numbers[i], i + 1);
        }

        return [];
    }
}
