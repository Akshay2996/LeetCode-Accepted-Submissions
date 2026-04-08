/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    // Iterative BFS -> Time - O(n)
    maxDepth(root) {
        if(!root) return 0;

        const q = new Queue([root]);
        let depth = 0;

        while(!q.isEmpty()){
            const size = q.size();
            for(let i = 0; i < size; i++){
                const node = q.pop();
                if(node.left){
                    q.push(node.left);
                }
                if(node.right){
                    q.push(node.right);
                }
            }
            depth++;
        }

        return depth;
    }
}
