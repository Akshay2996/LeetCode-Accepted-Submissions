// Brute force -> Time - O(n) and Space - O(n)
// Store the cache as an array -> [[key, value]]
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = [];
    }

    /**
     * @param {number} key
     * @return {number}
     */
    // When getting the key (get(key)) we first remove it and then insert it again from the back
    // so that it becomes the most recently used key
    get(key) {
        for(let i=0; i < this.cache.length; i++){
            if(this.cache[i][0] === key){
                // Remove the key
                const temp = this.cache.splice(i,1)[0];
                // Append that key again
                this.cache.push(temp);

                return temp[1];
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    // When we use put for updating the key with the new value
    put(key, value) {
        for(let i = 0; i < this.cache.length; i++){
            if(this.cache[i][0] === key){
                // Remove the key
                this.cache.splice(i, 1)[0];
            }
        }

        // Append the key
        this.cache.push([key, value]);

        if(this.cache.length > this.cap){
            // Remove the first element of the array -> [[key1, value1], [key2, value2], ...]
            this.cache.shift();
        }
    }
}
