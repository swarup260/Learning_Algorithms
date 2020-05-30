const {
    BinarySearchTree
} = require('./BinarySearchTree');
const TreeNode = require('./models/TreeNode');
const {
    defaultCompare,
    Compare
} = require('../utils/function');

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}


class AVL extends BinarySearchTree {
    constructor(compareFun = defaultCompare) {
        super(compareFun);
    }

    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    getBalancedFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
                break;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
                break;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
                break;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
                break;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    LLRotation(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;

    }

    RRRotation(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    RLRotation(node) {
        node.right = this.LLRotation(node.right);
        return this.RRRotation(node);
    }

    LRRotation(node) {
        node.left = this.RRRotation(node.left);
        return this.LLRotation(node);
    }

    insert(key) {
        this.root = this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if (node == null) {
            return new TreeNode(key);
        } else if (this.compareFun(key, node.element) == Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFun(key, node.element) == Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }

        // Balanced Factore 
        const balanceFactor = this.getBalancedFactor(node);
        if (balanceFactor == BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFun(key, node.left.element) == Compare.LESS_THAN) {
                node = this.LLRotation(node);
            } else {
                return this.LRRotation(node);
            }
        } else if (balanceFactor == BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFun(key, node.left.element) == Compare.BIGGER_THAN) {
                node = this.RRRotation(node);
            } else {
                return this.RLRotation(node);
            }
        }

    }

    removeNode(node, element) {
        node = super.removeNode(node,element);
        if (node == null) {
            return null; //no need to balance
        }

        const balanceFactor = this.getBalancedFactor(node);
        if (balanceFactor == BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalancedFactor(node.left);
            if (balanceFactorLeft == BalanceFactor.BALANCED || BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                node = this.LLRotation(node);
            }
            if (balanceFactorLeft == BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.LRRotation(node);
            }


        } else if (balanceFactor == BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalancedFactor(node.right);
            if (balanceFactorRight == BalanceFactor.BALANCED || BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                node = this.RRRotation(node);
            }
            if (balanceFactorRight == BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.RLRotation(node);
            }
        }

    }

}



module.exports = AVL;