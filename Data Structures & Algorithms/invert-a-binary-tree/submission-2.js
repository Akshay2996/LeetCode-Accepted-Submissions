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
     * @return {TreeNode}
     */
    // Iterative traversal (DFS) -> Time - O(n) and Space - O(n)
    invertTree(root) {
        if(!root) return null;

        const stack = [root];

        while(stack.length > 0){
            const node = stack.pop();
            // Process the node
            let temp = node.left;
            node.left = node.right;
            node.right = temp;

            if(node.left){
                stack.push(node.left);
            }
            if(node.right){
                stack.push(node.right);
            }
        }

        return root;
    }
}
