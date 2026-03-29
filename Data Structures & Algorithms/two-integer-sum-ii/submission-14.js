class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Binary search -> Time - O(nlogn) and Space - O(1)
    twoSum(numbers, target) {
        for(let i = 0; i < numbers.length; i++){
            let l = i + 1;
            let r = numbers.length - 1;
            let temp = target - numbers[i];
            while(l<=r){
                const mid = l + Math.floor((r-l)/2);

                if(numbers[mid] === temp){
                    return [i+1, mid+1];
                } else if(numbers[mid] > temp){
                    r = mid-1;
                } else {
                    l=mid+1;
                }
            }
        }

        return [];
    }
}
