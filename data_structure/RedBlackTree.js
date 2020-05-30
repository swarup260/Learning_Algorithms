const {
    Colors,
    RedBlackNode
} = require('./models/RedBlackNode');
const {
    BinarySearchTree
} = require('./BinarySearchTree');
const {
    defaultCompare,
    Compare
} = require('../utils/function')
class RedBlackTree extends BinarySearchTree {
    constructor(compareFunc = defaultCompare) {
        super(compareFunc);
    }

    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackNode(key);
            // Root Node Must be Black
            this.root.Colors = Colors.BLACK
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }

    insertNode(node, key) {
        if (this.compareFun(key, node.element) == Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node
            } else {
                return this.insertNode(node.left, key);
            }
        } else if (this.compareFun(key, node.element) == Compare.BIGGER_THAN) {
            if (node.right == null) {
                node.right = new RedBlackNode(key);
                node.right.parent = node;
            } else {
                return this.insertNode(node.right, key);
            }
        }
    }
    // Recoloring or Rotating
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.isRed() && node.parent.color != Colors.BLACK) {
            let parent = node.parent;
            let grandParent = parent.parent;
            // Case A : parent is left 
            if (grandParent && grandParent.left == parent) {
                // Case 1A : Recoloring  
                let uncle = grandParent.right;
                if (uncle && uncle.isRed()) {
                    // If the node is red then its descendent will be BLACK
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }

                // Case 2A : parent is rigth LR Rotation
                if (node == parent.right) {
                    this.LRRotation(parent);
                    node = parent;
                    parent = node.parent;
                }
                // Case 3A : parent is left LL Rotation
                this.LLRotation(grandParent);
                parent.color = Colors.BLACK;
                grandParent.color = Colors.RED;
                node = parent;

            } else {
                let uncle = grandParent.left;
                if (uncle && uncle.isRed()) {
                    // If the node is red then its descendent will be BLACK
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }

                // Case 2A : parent is left RL Rotation
                if (node == parent.left) {
                    this.RLRotation(parent);
                    node = parent;
                    parent = node.parent;
                }
                // Case 3A : parent is left RR Rotation
                this.RRRotation(grandParent);
                parent.color = Colors.BLACK;
                grandParent.color = Colors.RED;
                node = parent;

            }


        }
        this.root.color = Colors.BLACK;
    }

    LLRotation(node) {
        const tmp = node.left;
        node.right = tmp.left;
        if (tmp.right && tmp.right.element) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {

            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }


        }
        tmp.right = node;
        node.parent = tmp;

    }
    RRRotation(node) {
        const tmp = node.right;
        node.left = tmp.right;
        if (tmp.left && tmp.left.element) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {

            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }


        }
        tmp.left = node;
        node.parent = tmp;
    }
    LRRotation(node) {
        node.left = this.RRRotation(node.left);
        return this.RRRotation(node);
    }
    RLRotation(node) {
        node.right = this.LLRotation(node.right);
        return this.LLRotation(node);
    }

    removeNode(node, element) {
        const newNode = super.removeNode(node, element);
        if (node == null) {
            return null;
        }
        this.fixTreeProperties(newNode);
        return newNode;
    }

}


module.exports = {
    RedBlackTree
}