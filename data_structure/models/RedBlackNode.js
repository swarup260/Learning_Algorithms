const TreeNode = require('./TreeNode')

const Colors = {
    RED : 0,
    BLACK :1 
}


class RedBlackNode extends TreeNode {
    constructor(element){
        super(element);
        this.color = Colors.RED;
        this.parent = null;
    }

    isRed(){
        this.color == Colors.RED;
    }
}


module.exports  = {
    Colors,
    RedBlackNode
}