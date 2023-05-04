/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    //Depth First Search method
    
    
    //base case
    if (root === null) return null;
    
    //hold the left value at the current recursive call;
    let left = root.left;
    //reassign both left and right nodes with each other;
    root.left = root.right;
    root.right = left;
    
    //recursively call both the left and right subtrees;
    invertTree(root.left);
    invertTree(root.right);
    
    //return the root at the end;
    return root;
};