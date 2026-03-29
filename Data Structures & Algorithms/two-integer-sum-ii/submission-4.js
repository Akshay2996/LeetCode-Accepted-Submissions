class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Hashmap - Time complexity - O(n), Space Complexity - O(n)
    twoSum(numbers, target) {
        let map = new Map();
        // HashMap -> value: index
        for(let i=0; i< numbers.length; i++){
            let temp = target - numbers[i];
            if(map.has(temp)){
                return [map.get(temp), i+1]
            }
            map.set(numbers[i], i+1);
        }
        return [];
    }
}