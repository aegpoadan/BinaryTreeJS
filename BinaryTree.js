function nullCheck(node) {
  "use strict";

  if(node == null) {
    throw new Error("Node cannot be null.");
  }
}; 

function BinaryTree(node) {
  "use strict";

  nullCheck(node);

  this.node = node;
  this.left = null;
  this.right = null;

  this.lowestNode = function(node) {
    if(node != null) {
      if(node.left != null) {
        return this.lowestNode(node.left);
      } else {
        return this;
      }
    } else {
      return null;
    }
  };

  this.highestNode = function(node) {
    if(node != null) {
      if(node.right != null) {
        return this.highestNode(node.right);
      } else {
        return this;
      }
    } else {
      return null;
    }
  };
  
  this.addNode = function(node) {
    nullCheck(node);

    if(node < this.node) {
      if(this.left != null) {
        this.left.addNode(node);
      } else {
        this.left = new BinaryTree(node); 
      }
    } else {
      if(this.right != null) {
        this.right.addNode(node);
      } else {
        this.right = new BinaryTree(node);  
      }
    }

    return this;
  };

  this.print = function() {
    if(this.left != null) {
      this.left.print();
    }

    console.log(this.node);

    if(this.right != null) {
      this.right.print();
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
          var greatestChildLeft = this.highestNode(this.left);
          var lowestChildRight = this.lowestNode(this.right);
          var left = this.left;
          var right = this.right;

          this.left = null;
          this.right = null;

          greatestChildLeft.right = lowestChildRight;
          lowestChildRight.left = greatestChildLeft;

          return greatestChildLeft;    
      }
    } else {
      if(this.left != null) {
        this.left.removeNode(node);
      }
      if(this.right != null) {
        this.right.removeNode(node);
      }
      if(this.left == null && this.right == null) {
        return;
      }
    }

    return this;
  };

  return this;
};

BinaryTree.prototype.toString = function() {
  "use strict";
  
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