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
    // Preorder traversal (Recursive) -> Time - O(n) and Space - O(n)
    invertTree(root) {
        if(!root) return null;

        // Process the node
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        // Traverse the left and right side of the node
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
