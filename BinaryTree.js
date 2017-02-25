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
  this.numberOfChildren = 0;

  this.lowestNodeHelper = function(node) {
    if(node.left == null) {
      return node;
    } else {
      return this.lowestNodeHelper(node.left);
    }
  }

  this.lowestNode = function() {
    if(this.left == null) {
      return this;
    } else {
      return this.lowestNodeHelper(this.left);
    }
  };

  this.highestNodeHelper = function(node) {
    if(node.right == null) {
      return node;
    } else {
      return this.highestNodeHelper(node.right);
    }
  }

  this.highestNode = function() {
    if(this.right == null) {
      return this;
    } else {
      return this.highestNodeHelper(this.right);
    }    
  };
  
  this.addNode = function(node) {
    nullCheck(node);

    if(node < this.node) {
      if(this.left == null) {
        this.numberOfChildren++;
        this.left = new BinaryTreeNode(node); 
      } else {
        this.numberOfChildren++;
        return this.left.addNode(node);
      }
    } else {
      if(this.right == null) {
        this.numberOfChildren++;
        this.right = new BinaryTreeNode(node); 
      } else {
        this.numberOfChildren++;
        return this.right.addNode(node); 
      }
    }
  };

  this.print = function() {
    nullCheck(this.node);

    if(this.left != null) {
      this.left.print();
    }

    console.log(this.node);

    if(this.right != null) {
      this.right.print();
    }
  };

  this.toArrayHelper = function(result) {
      if(this.left != null) {
        this.left.toArrayHelper(result);
      }

      result.push(this.node);

      if(this.right != null) {
        this.right.toArrayHelper(result);
      }

      return result;
    } 

  this.toArray = function() {
    var result = [];

    return this.toArrayHelper(result);
  }

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
        var oldLeft = Object.assign({}, this.left);
        this.left = this.left.right;
        oldLeft.right = this.lowestNode(); 
      }
    } else if(this.right != null && node == this.right.node) {
      if(this.right.left == null && this.right.right == null) {
        this.right = null;
      } else if(this.right.left == null && this.right.right != null) {
        this.right = this.right.right;
      } else if(this.right.left != null && this.right.right == null) {
        this.right = this.right.left;
      } else {
        var oldRight = Object.assign({}, this.right);
        this.right = this.right.left;
        this.highestNode().right = oldRight.right;
      }
    } else if (node == this.node) {
        if(this.left == null && this.right == null) {
          return null;
        } else if(this.right != null && this.left == null) {
          return this.right;
        } else if(this.left != null && this.right == null) {
          return this.left;
        } else {
          var greatestChildLeft = Object.assign({}, this.left.highestNode()); //copy of this.left.highestNode()

          greatestChildLeft.left = this.left;
          greatestChildLeft.right = this.right;

          greatestChildLeft.left.removeNode(greatestChildLeft.node);

          greatestChildLeft.size = this.size - 1;

          return greatestChildLeft;
      }
    } else {
      if(this.left != null) {
        this.numberOfChildren--;
        return this.left.removeNode(node);
      }
      if(this.right != null) {
        this.numberOfChildren--;
        return this.right.removeNode(node);
      }
      if(this.left == null && this.right == null) {
        return;
      }
    }
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

  this.push = function(node) {
    nullCheck(node);

    if(this.root != null) {
      this.root.addNode(node);
    } else {
      this.root = new BinaryTreeNode(node);
    }
  };

  this.remove = function(node) {
    nullCheck(node);
    //TODO fix bug with removing duplicates
    if(this.root != null) {
      if(this.root.node != node) {
        this.root.removeNode(node);
      } else {
        this.root = this.root.removeNode(node);
      }
    }
  };

  this.print = function() {
    nullCheck(this.root);

    this.root.print();
  };

  this.size = function() {
    return this.root.numberOfChildren + 1;
  }

  return this;
};