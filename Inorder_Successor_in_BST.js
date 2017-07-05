// https://leetcode.com/problems/inorder-successor-in-bst/#/solutions

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

// 上面那种方法也可以写成递归形式，写法也比较简洁，但是需要把思路理清，当根节点值小于等于p节点值，说明p的后继节点一定在右子树中，所以对右子节点递归调用此函数，如果根节点值大于p节点值，那么有可能根节点就是p的后继节点，或者左子树中的某个节点是p的后继节点，所以先对左子节点递归调用此函数，如果返回空，说明根节点是后继节点，返回即可，如果不为空，则将那个节点返回
var inorderSuccessor = function(root, p) {
    if (!root) return null;
    if (p.val >= root.val) {
        return inorderSuccessor(root.right, p);
    }
    else {
        return inorderSuccessor(root.left, p) || root; // if inorderSuccessor(root.left, p) == null means nothing in left tree is bigger than p, so root is the answer
    }
};
