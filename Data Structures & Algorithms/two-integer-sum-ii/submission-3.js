class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Binary search - O(nlogn)
    twoSum(numbers, target) {
        let n = numbers.length;
        // O(n)
        for(let i = 0; i< n; i++){
            let temp = target - numbers[i];
            let left = i + 1;
            let right = n - 1;
            // O(logn)
            while(left <= right){
                let mid = left + Math.floor((right-left)/2);
                if(temp === numbers[mid]){
                    return [i+1, mid+1];
                } else if(numbers[mid] < temp){
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return [];
    }
}