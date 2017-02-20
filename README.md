# BinaryTreeJS
Binary Tree Implementation in Javascript

## Usage
```javascript
var tree = new BinaryTree(0);
tree.addNode(-1);
tree.addNode(5);
tree.addNMode(3);

tree.print();

tree.removeNode(-1);

tree.print();
```

## Known Bugs
* Removal of root node causes stack frame limit to be exceeded
