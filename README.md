# BinaryTreeJS
Binary Tree Implementation in Javascript

## Usage
```javascript
var tree = new BinaryTree(0);
tree.push(-1);
tree.push(5);
tree.push(3);

tree.print(); 	// -1
				// 3
				// 5
tree.remove(-1);

tree.print(); 	// 3
				// 5
```

## Known Bugs
* Cannot remove duplicate nodes