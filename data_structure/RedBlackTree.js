const { Colors, RedBlack } = require('./models/RedBlackNode');
const { BinarySearchTree } = require('./BinarySearchTree');
const { defaultCompare,Compare } = require('../utils/function')
class RedBlackTree extends BinarySearchTree {
    constructor(compareFunc = defaultCompare){
        super(compareFunc);
    }

    insert(key){
        if (this.root == null) {
            this.root = new RedBlack(key);
            // Root Node Must be Black
            this.root.Colors =  Colors.BLACK
        } else {
            this.insertNode(this.root , key);
        }
        this.fixTreeProperties(this.root);
    }

    insertNode(node, key){
        if (this.compareFun(key ,node.element) == Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlack(key);
                node.left.parent = node
            }
            this.insertNode(node.left,key);
        } else if (this.compareFun(key, node.element) == Compare.BIGGER_THAN){
            if (node.right == null) {
                node.right = new RedBlack(key);
                node.right.parent = node;
            }
            this.insertNode(node.left, key);
        }else{
            node;
        }

    }
    // Recoloring or Rotating
    fixTreeProperties(node){
        while (node && node.parent && node.parent.isRed() && node.parent != Colors.BLACK) {
            let parent  = node.parent;
            let grandParent = parent.parent;
            // Case A :  uncle is Right
            if (grandParent && grandParent.left == parent) {
                let uncle = grandParent.right;

                // Case 1A : Uncle is Red 
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                }
                // Case 2A : Node is Rigt Child
                if (node) {
                    
                }else{

                }
                // Case 1A : Node is left CHild





            }else{
                // Case B :  uncle is Right
                let uncle = grandParent.left;
                // Case 1B : Uncle is Red 
                if (condition) {

                }
                // Case 2B : Node is Rigt Child
                // Case 1B : Node is left CHild

            }
        }
        this.root.color = Colors.BLACK;
    }

    LLRotation(node){
        
    }
    LRRotation(node){

    }
    RRRotation(node){

    }
    RLRotation(node){

    }








}