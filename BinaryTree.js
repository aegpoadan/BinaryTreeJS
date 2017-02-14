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
		if(name < this.name) {
			if(this.left != null) {
				this.left.removeNode(name);
            } else {
				return;
            }
		} else if(name > this.name) {
			if(this.right)
		}
	}

	return this;
}