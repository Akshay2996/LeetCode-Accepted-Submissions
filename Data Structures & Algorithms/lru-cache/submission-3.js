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
    get(key) {
        for(let i = 0; i < this.cache.length; i++){
            // Found the key
            if(this.cache[i][0] === key){
                // Remove the [key, value] from array first
                const temp = this.cache.splice(i,1)[0];
                // Append it at the last index of the array
                this.cache.push(temp);
                // Return the value
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
    put(key, value) {
        // Update the value if the key is already present
        for(let i = 0; i < this.cache.length; i++){
            // Found the key
            if(this.cache[i][0] === key){
                // Remove the key
                this.cache.splice(i,1);
            }
        }
        // Append the key,value at the end of the array
        this.cache.push([key,value]);

        if(this.cache.length > this.cap){
            this.cache.shift();
        }

    }

}