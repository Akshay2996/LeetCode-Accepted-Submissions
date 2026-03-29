class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // HashMap -> Time - O(n) Space - O(n)
    twoSum(numbers, target) {
        // value: index
        let map = new Map();
        // O(n)
        for(let i=0; i< numbers.length; i++){
            let temp = target - numbers[i];
            if(map.has(temp)){
                return [map.get(temp), i+1];
            }
            map.set(numbers[i], i+1);
        }
        return [];
    }
}