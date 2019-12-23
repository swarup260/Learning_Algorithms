const {
    BinarySearchTree
} = require('./BinarySearchTree');
const TreeNode = require('./models/TreeNode');

const {
    defaultCompare,
    Compare
} = require('../utils/function');


const BalancedFactor = {
    SLIGHTY_BALANCED_RIGHT: 1,
    SLIGHTY_BALANCED_LEFT: 2,
    BALANCED_LEFT: 3,
    BALANCED_RIGHT: 4,
    BALANCED: 5,
}


class AVLTree extends BinarySearchTree {
    constructor(compareFun = defaultCompare) {
        super(compareFun);
    }

    getHeightFactor(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getHeightFactor(node.left), this.getHeightFactor(node.right)) + 1;
    }

    getBalanceFactor(node) {
        const heightDifference = this.getHeightFactor(node.left) - this.getBalanceFactor(node.right);
        switch (heightDifference) {
            case -2:
                return BalancedFactor.SLIGHTY_BALANCED_RIGHT;
            case -1:
                return BalancedFactor.SLIGHTY_BALANCED_RIGHT;
            case 1:
                return BalancedFactor.SLIGHTY_BALANCED_RIGHT;
            case 2:
                return BalancedFactor.SLIGHTY_BALANCED_RIGHT;
            default:
                return BalancedFactor.BALANCED;
        }
    }


    rotationLL(node){
        const tmp = node.left;
        node.left = node.right;
        node.right = node;
        return tmp;
    }
    rotationRR(node){
        const tmp = node.right;
        node.right = node.left;
        node.left = node;
        return tmp;
    }
    rotationLR(node){
        node.left = this.rotationLL(node);
        return this.rotationRR(node);
    }
    rotationRL(node){
        node.right = this.rotationLL(node);
        return this.rotationRR(node);
    }




}


module.exports = AVLTree;