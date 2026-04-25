class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    // 2 Pointers + Sorting -> Time - O(nlogn) and Space - O(1)
    numRescueBoats(people, limit) {
        people.sort((a,b) => a - b);

        let boats = 0;
        let l = 0;
        let r = people.length - 1;

        while(l <= r){
            let remain = limit - people[r];
            boats++;
            r--;

            if(l <= r && remain >= people[l]){
                l++;
            }
        }

        return boats;
    }
}
