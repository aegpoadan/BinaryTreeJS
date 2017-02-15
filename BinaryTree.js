function nullCheck(node) {
    if(node == null) {
      throw new Error("Node cannot be null.");
    }
}; 

function tree(node) {
  nullCheck(node);

  this.node = node;
  this.left = null;
  this.right = null;

  this.lowestNode = function(node) {
    if(node != null) {
      if(node.left != null) {
        return lowestNode(node.left);
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
        return highestNode(node.right);
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
        this.left = new tree(node); 
      }
    } else {
      if(this.right != null) {
        this.right.addNode(node);
      } else {
        this.right = new tree(node);  
      }
    }
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
        var left = this.left;
        this.left = this.left.right;
        left.right = lowestNode(this.left); 
      }
    } else if(this.right != null && node == this.right.node) {
        //TODO
    } else if (node == this.node) {
        //TODO
    } else {
      if(this.left.node != null) {
        this.left.removeNode(node);
      }
      if(this.right.node != null) {
        this.right.removeNode(node);
      }
    }
  };

  return this;
}