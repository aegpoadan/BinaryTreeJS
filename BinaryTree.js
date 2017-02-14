function tree(name) {
  this.name = name;
  this.left = null;
  this.right = null;
  
  this.addNode = function(name) {
    if(name < this.name) {
      if(this.left != null) {
        this.left.addNode(name);
      } else {
        this.left = new tree(name); 
      }
    } else {
        if(this.right != null) {
          this.right.addNode(name);
        } else {
          this.right = new tree(name);  
        }
      }
    };

  this.print = function() {
    if(this.left != null) {
      this.left.print();
    }
    console.log(this.name);
    if(this.right != null) {
      this.right.print();
    }
  };

  this.removeNode = function(name) {
    if(name == this.left.name) {
      if(this.left.left == null && this.left.right == null) {
        this.left = null;
      } else if(this.left.left == null && this.left.right != null) {
        this.left = this.left.right;
      } else if(this.left.left != null && this.left.right == null) {
        this.left = this.left.left;
      } else {
        //TODO implement recursive remove
      }
    } else if(name == this.right.name) {
        //TODO
    } else if (name == this.name) {
        //TODO
    } else {
      if(this.left.name != null) {
        this.left.removeNode(name);
      }
      if(this.right.name != null) {
        this.right.removeNode(name);
      }
    }
  };

  return this;
}