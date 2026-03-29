class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Two Pointers -> Time - O(n) Space - O(1)
    twoSum(numbers, target) {
        // target = x + y

        let left = 0;
        let right = numbers.length - 1;

        while(left<right){
            const sum = numbers[left] + numbers[right];

            if(target > sum){
                left++;
            } else if (target < sum){
                right--;
            } else {
                return [left + 1, right + 1];
            }
        }

        return [];
    }
}