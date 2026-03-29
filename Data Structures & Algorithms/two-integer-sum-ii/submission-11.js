class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Two Pointers -> Time - O(n) Space - O(1)
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;
        // O(n)
        for(let i=0; i<numbers.length; i++){
            let sum = numbers[left] + numbers[right];
            if(sum < target){
                left++;
            } else if(sum > target){
                right--;
            } else {
                return [left+1, right+1];
            }
        }
        return [];
    }
}