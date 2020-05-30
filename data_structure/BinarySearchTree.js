const TreeNode = require('./models/TreeNode');
const {
    defaultCompare,
    Compare
} = require('../utils/function')
/**
 * @class Binary Search Tree
 */

class BinarySearchTree {
    constructor(compareFun = defaultCompare) {
        this.root = null;
        this.compareFun = compareFun;
    }

    insert(element) {
        if (element == null) {
            return false;
        }
        if (this.root == null) {
            this.root = new TreeNode(element);
        } else {
            this.insertNode(element, this.root);
        }
        return true;
    }

    insertNode(element, node) {
        if (this.compareFun(element, node.element) == Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new TreeNode(element);
            } else {
                this.insertNode(element, node.left);
            }
        } else if (this.compareFun(element, node.element) == Compare.BIGGER_THAN) {
            if (node.right == null) {
                node.right = new TreeNode(element);
            } else {
                this.insertNode(element, node.right);
            }
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.element);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.element);
        }
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.element);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    min() {
        return this.minNode(this.root)
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = node.left;
        }
        return current;
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = node.right;
        }
        return current;
    }

    search(element) {
        return this.searchNode(this.root, element);
    }

    searchNode(node, element) {
        if (node == null) {
            return false;
        }
        if (this.compareFun(element, node.element) == Compare.LESS_THAN) {
            return this.searchNode(node.left, element);
        } else if (this.compareFun(element, node.element) == Compare.BIGGER_THAN) {
            return this.searchNode(node.right, element);

        } else {
            return true;
        }
    }

    remove(element) {
        this.root = this.removeNode(this.root, element);
    }

    removeNode(node, element) {
        if (node == null) {
            return false;
        }

        if (this.compareFun(element, node.element) == Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, element);
            return node;
        } else if (this.compareFun(element, node.element) == Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, element);
            return node;
        } else {
            // Equal Cases
            /* case 1 */
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            /* case 2 */
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            /* case 3 */
            const aux = this.minNode(node.right);
            node.element = aux.element;
            node.right = this.removeNode(node.right, aux.element);
            return node;
        }



    }



}



module.exports = {
    BinarySearchTree
}