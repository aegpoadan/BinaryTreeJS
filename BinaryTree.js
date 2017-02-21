"use strict";

function nullCheck(node) {
  if(node == null) {
    throw new Error("Node cannot be null.");
  }
}; 

function BinaryTreeNode(node) {
  nullCheck(node);

  this.node = node;
  this.left = null;
  this.right = null;

  this.lowestNode = function(node) {
    if(node == null) {
      return null;
    } else {
      if(node.left == null) {
        return this;
      } else {
        return this.lowestNode(node.left);
      }
    }
  };

  this.highestNode = function(node) {
    if(node == null) {
      return null;
    } else {
      if(node.right == null) {
        return this;
      } else {
        return this.highestNode(node.right);
      }    
    }
  };
  
  this.addNode = function(node) {
    nullCheck(node);

    if(node < this.node) {
      if(this.left == null) {
        this.left = new BinaryTreeNode(node); 
      } else {
        return this.left.addNode(node);
      }
    } else {
      if(this.right == null) {
        this.right = new BinaryTreeNode(node); 
      } else {
        return this.right.addNode(node); 
      }
    }

    return this;
  };

  this.print = function() {
    if(this.left != null) {
      return this.left.print();
    }

    console.log(this.node);

    if(this.right != null) {
      return this.right.print();
    }
  };

  this.removeNode = function(node) {
    nullCheck(node);

    if(this.left != null && node == this.left.node) {
      if(this.left.left == null && this.left.right == null) {
        this.left = null;
      } else if(this.left.left == null && this.left.right != null) {
        this.left = this.left.right;
      } else if(this.left.left != null && this.left.right == null) {
        this.left = this.left.left;
      } else {
        var oldLeft = this.left;
        this.left = this.left.right;
        oldLeft.right = this.lowestNode(this.left); 
      }
    } else if(this.right != null && node == this.right.node) {
      if(this.right.left == null && this.right.right == null) {
        this.right = null;
      } else if(this.right.left == null && this.right.right != null) {
        this.right = this.right.right;
      } else if(this.right.left != null && this.right.right == null) {
        this.right = this.right.left;
      } else {
        var oldRight = this.right;
        this.right = this.right.left;
        this.highestNode(this.right).right = oldRight.right;
      }
    } else if (node == this.node) {
        if(this.left == null && this.right == null) {
          return null;
        } else if(this.left == null && this.right != null) {
          return this.right;
        } else if(this.left != null && this.right == null) {
          return this.left;
        } else {
          var greatestChildLeft = new this.highestNode(this.left);
          //TODO

          return greatestChildLeft;    
      }
    } else {
      if(this.left != null) {
        return this.left.removeNode(node);
      }
      if(this.right != null) {
        return this.right.removeNode(node);
      }
      if(this.left == null && this.right == null) {
        return;
      }
    }

    return this;
  };

  return this;
};

BinaryTreeNode.prototype.toString = function() {
  var result = "";

  if(this.left != null) {
    result += this.left.toString();
  }

  result += ("\n" + this.node.toString() + "\n");

  if(this.right != null) {
    result += this.right.toString();
  }

  return result;
};

function BinaryTree() {
  this.root = null;

  this.add = function(node) {
    nullCheck(node);

    if(root != null) {
      root.addNode(node);
    } else {
      root = node;
    }
  };

  this.remove = function(node) {

  }
};